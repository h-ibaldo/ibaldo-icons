#!/usr/bin/env python3
"""
Combined icon processing: AI-powered renaming + accessibility enhancement.
Analyzes full SVG code to generate accurate names and accessibility attributes.
"""

import os
import json
import sys
from pathlib import Path
from typing import List, Dict, Set, Tuple
import anthropic
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class IconProcessor:
    def __init__(self, api_key: str):
        self.client = anthropic.Anthropic(api_key=api_key)
        self.name_registry: Set[str] = set()
        self.log_file = "processing_log.jsonl"
        
    def load_existing_names(self, icons_dir: str):
        """Load existing icon names to avoid duplicates"""
        for svg_file in Path(icons_dir).rglob("*.svg"):
            name = svg_file.stem.lower()
            # Remove "rename-" prefix if present
            if name.startswith("rename-"):
                name = name[7:]
            self.name_registry.add(name)
        print(f"Loaded {len(self.name_registry)} existing icon names")
    
    def read_svg_full(self, svg_path: Path) -> str:
        """Read complete SVG file"""
        try:
            with open(svg_path, 'r', encoding='utf-8') as f:
                return f.read()
        except Exception as e:
            print(f"Error reading {svg_path}: {e}")
            return ""
    
    def process_icon_with_ai(self, svg_content: str, filename: str) -> Dict:
        """Send full SVG to AI for analysis and get name + accessibility info"""
        
        prompt = f"""Analyze this SVG icon code and generate:
1. A descriptive filename (kebab-case, 2-4 words)
2. A short title for accessibility (2-4 words)
3. A brief description for accessibility (one sentence)

RULES FOR FILENAME:
- Must be lowercase with hyphens (kebab-case)
- 2-4 words describing what the icon depicts
- Be specific based on the SVG paths and visual design
- Avoid generic terms like "icon" or "image"
- Do NOT use "rename-" prefix
- Must be unique (check against existing names below)

EXISTING NAMES (DO NOT REUSE):
{', '.join(sorted(list(self.name_registry)[:100]))}
... and {max(0, len(self.name_registry) - 100)} more

CURRENT FILENAME (for context): {filename}

SVG CODE:
{svg_content}

Return ONLY a JSON object with this exact format:
{{"filename": "descriptive-name", "title": "Short Title", "description": "Brief description of what the icon depicts"}}

IMPORTANT: Response must be ONLY the JSON object, nothing else."""

        try:
            response = self.client.messages.create(
                model="claude-sonnet-4-20250514",
                max_tokens=500,
                messages=[{"role": "user", "content": prompt}]
            )
            
            response_text = response.content[0].text.strip()
            
            # Remove markdown code blocks if present
            if response_text.startswith("```"):
                lines = response_text.split('\n')
                response_text = '\n'.join(lines[1:-1]) if len(lines) > 2 else response_text
                response_text = response_text.strip()
            
            # Parse JSON response
            result = json.loads(response_text)
            
            # Validate required fields
            if not all(k in result for k in ['filename', 'title', 'description']):
                raise ValueError(f"Missing required fields in response: {result}")
            
            # Check for duplicate filename
            if result['filename'].lower() in self.name_registry:
                raise ValueError(f"Duplicate filename generated: {result['filename']}")
            
            # Add to registry
            self.name_registry.add(result['filename'].lower())
            
            return result
            
        except json.JSONDecodeError as e:
            print(f"JSON parsing error: {e}")
            print(f"Response: {response_text}")
            raise
        except Exception as e:
            print(f"Error processing with AI: {e}")
            raise
    
    def update_svg_accessibility(self, svg_content: str, svg_id: str, title: str, description: str) -> str:
        """Add accessibility attributes to SVG"""
        
        # Generate unique IDs for title and desc
        title_id = f"title-{svg_id}"
        desc_id = f"desc-{svg_id}"
        
        # Find the opening <svg> tag
        svg_start = svg_content.find('<svg')
        svg_end = svg_content.find('>', svg_start)
        
        if svg_start == -1 or svg_end == -1:
            raise ValueError("Could not find <svg> tag")
        
        # Get the opening tag
        opening_tag = svg_content[svg_start:svg_end]
        
        # Add role and aria-labelledby if not present
        if 'role=' not in opening_tag:
            opening_tag += f' role="img"'
        if 'aria-labelledby=' not in opening_tag:
            opening_tag += f' aria-labelledby="{title_id} {desc_id}"'
        
        # Close the tag
        opening_tag += '>'
        
        # Create title and desc elements
        title_elem = f'\n  <title id="{title_id}">{title}</title>'
        desc_elem = f'\n  <desc id="{desc_id}">{description}</desc>'
        
        # Reconstruct SVG
        before_svg = svg_content[:svg_start]
        after_opening = svg_content[svg_end + 1:]
        
        new_svg = before_svg + opening_tag + title_elem + desc_elem + after_opening
        
        return new_svg
    
    def process_single_icon(self, svg_path: Path, dry_run: bool = True) -> Dict:
        """Process a single icon: analyze, rename, add accessibility"""
        
        print(f"Processing: {svg_path.name}")
        
        # Read SVG
        svg_content = self.read_svg_full(svg_path)
        if not svg_content:
            raise ValueError("Empty SVG content")
        
        # Get AI analysis
        ai_result = self.process_icon_with_ai(svg_content, svg_path.name)
        
        # Extract SVG ID for accessibility IDs
        svg_id = "icon"
        if 'id="' in svg_content:
            start = svg_content.find('id="') + 4
            end = svg_content.find('"', start)
            svg_id = svg_content[start:end]
        
        # Update SVG with accessibility
        updated_svg = self.update_svg_accessibility(
            svg_content,
            svg_id,
            ai_result['title'],
            ai_result['description']
        )
        
        # Prepare new filename
        new_filename = f"{ai_result['filename']}.svg"
        new_path = svg_path.parent / new_filename
        
        result = {
            'old_path': str(svg_path),
            'new_path': str(new_path),
            'old_name': svg_path.name,
            'new_name': new_filename,
            'title': ai_result['title'],
            'description': ai_result['description']
        }
        
        if not dry_run:
            # Write updated SVG
            with open(svg_path, 'w', encoding='utf-8') as f:
                f.write(updated_svg)
            
            # Rename file
            svg_path.rename(new_path)
            print(f"✓ {svg_path.name} → {new_filename}")
        else:
            print(f"  Would rename: {svg_path.name} → {new_filename}")
            print(f"  Title: {ai_result['title']}")
            print(f"  Desc: {ai_result['description']}")
        
        return result
    
    def process_icons(self, icons_dir: str, max_icons: int = None, dry_run: bool = True):
        """Process all icons"""
        svg_files = sorted(Path(icons_dir).glob("*.svg"))
        
        if max_icons:
            svg_files = svg_files[:max_icons]
        
        print(f"\nProcessing {len(svg_files)} icons")
        print(f"Mode: {'DRY RUN' if dry_run else 'LIVE PROCESSING'}\n")
        
        results = []
        
        for idx, svg_file in enumerate(svg_files, 1):
            print(f"\n[{idx}/{len(svg_files)}]")
            
            try:
                result = self.process_single_icon(svg_file, dry_run=dry_run)
                results.append(result)
                
                # Log after each icon
                with open(self.log_file, 'a') as f:
                    f.write(json.dumps(result) + '\n')
                
            except Exception as e:
                print(f"✗ Error processing {svg_file.name}: {e}")
                continue
        
        print(f"\n✓ Processed {len(results)}/{len(svg_files)} icons successfully")
        print(f"Check {self.log_file} for detailed log")


def main():
    # Configuration
    ICONS_DIR = "/Users/henriqueibaldo/Library/Mobile Documents/com~apple~CloudDocs/WORK 2/ICONS/website/icon-design/static/icons/popular"
    MAX_ICONS = 3  # Start with just 3 icons for testing
    DRY_RUN = True  # Set to False to actually process files
    
    # Get API key
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        print("Error: ANTHROPIC_API_KEY not found in .env file")
        sys.exit(1)
    
    # Create processor
    processor = IconProcessor(api_key)
    
    # Load existing names
    processor.load_existing_names(ICONS_DIR)
    
    # Process icons
    processor.process_icons(
        icons_dir=ICONS_DIR,
        max_icons=MAX_ICONS,
        dry_run=DRY_RUN
    )


if __name__ == "__main__":
    main()
