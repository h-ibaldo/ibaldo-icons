#!/usr/bin/env python3
"""
AI-powered icon renaming script using Claude API.
Processes SVG icons in batches to generate unique, descriptive names.
"""

import os
import json
import sys
from pathlib import Path
from typing import List, Dict, Set
import anthropic
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class IconRenamer:
    def __init__(self, api_key: str):
        self.client = anthropic.Anthropic(api_key=api_key)
        self.name_registry: Set[str] = set()
        self.log_file = "renaming_log.jsonl"
        
    def load_existing_names(self, icons_dir: str):
        """Load existing icon names to avoid duplicates"""
        for svg_file in Path(icons_dir).rglob("*.svg"):
            name = svg_file.stem.lower()
            self.name_registry.add(name)
        print(f"Loaded {len(self.name_registry)} existing icon names")
    
    def read_svg_preview(self, svg_path: Path, max_chars: int = 800) -> str:
        """Read first N characters of SVG for AI analysis"""
        try:
            with open(svg_path, 'r', encoding='utf-8') as f:
                content = f.read(max_chars)
                return content
        except Exception as e:
            print(f"Error reading {svg_path}: {e}")
            return ""
    
    def generate_names_batch(self, svg_data: List[Dict]) -> List[str]:
        """Generate unique names for a batch of icons using Claude"""
        
        # Prepare the batch data for the prompt
        batch_info = []
        for idx, item in enumerate(svg_data):
            batch_info.append({
                "index": idx,
                "filename": item['filename'],
                "svg_preview": item['content'][:600]  # Limit preview
            })
        
        # Create the prompt
        prompt = f"""Analyze these {len(batch_info)} SVG icons and generate unique, descriptive filenames.

CRITICAL RULES:
1. Names MUST be lowercase with hyphens (kebab-case)
2. Names MUST be unique - no duplicates within this batch or with existing names
3. Names should be 2-4 words describing what the icon depicts
4. Avoid generic terms like "icon" or "image"
5. Be specific and descriptive based on the SVG paths and shapes
6. Do NOT use "rename-" prefix

ALREADY USED NAMES (DO NOT REUSE):
{', '.join(sorted(list(self.name_registry)[:50]))}
... and {max(0, len(self.name_registry) - 50)} more names

SVG ICONS TO NAME:
{json.dumps(batch_info, indent=2)}

Return ONLY a JSON array of names in the EXACT same order as the input icons.
Format: ["name-one", "name-two", "name-three"]

IMPORTANT: Your response must be ONLY the JSON array, nothing else. No explanation, no markdown, just the array."""

        try:
            response = self.client.messages.create(
                model="claude-sonnet-4-20250514",
                max_tokens=2000,
                messages=[{"role": "user", "content": prompt}]
            )
            
            # Extract the text response
            response_text = response.content[0].text.strip()
            
            # Debug: print the raw response
            print(f"Raw API response:\n{response_text}\n")
            
            # Try to extract JSON if it's wrapped in markdown code blocks
            if response_text.startswith("```"):
                # Remove markdown code blocks
                lines = response_text.split('\n')
                response_text = '\n'.join(lines[1:-1]) if len(lines) > 2 else response_text
                response_text = response_text.strip()
            
            # Parse JSON response
            names = json.loads(response_text)
            
            # Validate we got the right number of names
            if len(names) != len(svg_data):
                raise ValueError(f"Expected {len(svg_data)} names, got {len(names)}")
            
            # Validate uniqueness
            for name in names:
                name_lower = name.lower()
                if name_lower in self.name_registry:
                    raise ValueError(f"Duplicate name generated: {name}")
                self.name_registry.add(name_lower)
            
            return names
            
        except json.JSONDecodeError as e:
            print(f"JSON parsing error: {e}")
            print(f"Response text: {response_text}")
            raise
        except Exception as e:
            print(f"Error generating names: {e}")
            raise
    
    def rename_batch(self, svg_files: List[Path], new_names: List[str], dry_run: bool = True):
        """Rename a batch of files"""
        renames = []
        
        for svg_file, new_name in zip(svg_files, new_names):
            old_path = svg_file
            new_path = svg_file.parent / f"{new_name}.svg"
            
            renames.append({
                'old': str(old_path),
                'new': str(new_path),
                'old_name': svg_file.name,
                'new_name': f"{new_name}.svg"
            })
            
            if not dry_run:
                try:
                    old_path.rename(new_path)
                    print(f"✓ Renamed: {svg_file.name} → {new_name}.svg")
                except Exception as e:
                    print(f"✗ Error renaming {svg_file.name}: {e}")
        
        return renames
    
    def log_renames(self, batch_num: int, renames: List[Dict]):
        """Log rename operations to file"""
        with open(self.log_file, 'a') as f:
            log_entry = {
                'batch': batch_num,
                'count': len(renames),
                'renames': renames
            }
            f.write(json.dumps(log_entry) + '\n')
    
    def process_icons(self, icons_dir: str, batch_size: int = 5, max_icons: int = None, dry_run: bool = True):
        """Process all icons in batches"""
        svg_files = sorted(Path(icons_dir).glob("*.svg"))
        
        if max_icons:
            svg_files = svg_files[:max_icons]
        
        print(f"\nProcessing {len(svg_files)} icons in batches of {batch_size}")
        print(f"Mode: {'DRY RUN' if dry_run else 'LIVE RENAME'}\n")
        
        total_batches = (len(svg_files) + batch_size - 1) // batch_size
        
        for batch_num in range(total_batches):
            start_idx = batch_num * batch_size
            end_idx = min(start_idx + batch_size, len(svg_files))
            batch = svg_files[start_idx:end_idx]
            
            print(f"--- Batch {batch_num + 1}/{total_batches} ---")
            
            # Read SVG contents
            svg_data = []
            for svg_file in batch:
                svg_data.append({
                    'path': svg_file,
                    'filename': svg_file.name,
                    'content': self.read_svg_preview(svg_file)
                })
            
            # Generate names
            try:
                new_names = self.generate_names_batch(svg_data)
                
                # Rename files
                renames = self.rename_batch(batch, new_names, dry_run=dry_run)
                
                # Log the operations
                self.log_renames(batch_num, renames)
                
                print(f"Batch {batch_num + 1} complete\n")
                
            except Exception as e:
                print(f"Error processing batch {batch_num + 1}: {e}")
                print("Stopping to prevent issues\n")
                break


def main():
    # Configuration
    ICONS_DIR = "/Users/henriqueibaldo/Library/Mobile Documents/com~apple~CloudDocs/WORK 2/ICONS/website/icon-design/static/icons/popular"
    BATCH_SIZE = 5
    MAX_ICONS = 5  # Start with just 5 icons for testing
    DRY_RUN = True  # Set to False to actually rename files
    
    # Get API key from environment
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        print("Error: ANTHROPIC_API_KEY environment variable not set")
        sys.exit(1)
    
    # Create renamer instance
    renamer = IconRenamer(api_key)
    
    # Load existing names (optional - helps avoid duplicates)
    # renamer.load_existing_names(ICONS_DIR)
    
    # Process icons
    renamer.process_icons(
        icons_dir=ICONS_DIR,
        batch_size=BATCH_SIZE,
        max_icons=MAX_ICONS,
        dry_run=DRY_RUN
    )
    
    print("\n✓ Processing complete!")
    print(f"Check {renamer.log_file} for detailed rename log")


if __name__ == "__main__":
    main()
