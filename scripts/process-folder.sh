#!/bin/bash

# Quick Icon Processor
# Usage: ./scripts/process-folder.sh <folder-name>
# Example: ./scripts/process-folder.sh media-controls

if [ -z "$1" ]; then
    echo "❌ Error: Please provide a folder name"
    echo ""
    echo "Usage: ./scripts/process-folder.sh <folder-name>"
    echo ""
    echo "Example:"
    echo "  ./scripts/process-folder.sh media-controls"
    echo ""
    echo "This will process all icons in: src/icons/raw/media-controls/"
    exit 1
fi

FOLDER_NAME="$1"
FOLDER_PATH="src/icons/raw/$FOLDER_NAME"

echo "============================================================"
echo "  PROCESSING ICONS FROM: $FOLDER_NAME"
echo "============================================================"
echo ""

# Check if folder exists
if [ ! -d "$FOLDER_PATH" ]; then
    echo "❌ Error: Folder not found: $FOLDER_PATH"
    echo ""
    echo "Available folders in src/icons/raw/:"
    ls -1 src/icons/raw/ 2>/dev/null || echo "  (none)"
    exit 1
fi

# Count icons
ICON_COUNT=$(find "$FOLDER_PATH" -name "*.svg" | wc -l | tr -d ' ')
echo "📁 Found $ICON_COUNT icon(s) in $FOLDER_NAME"
echo ""

if [ "$ICON_COUNT" -eq 0 ]; then
    echo "⚠️  No SVG files found in this folder"
    exit 1
fi

# Run the build
echo "🚀 Processing icons..."
echo ""
npm run build:icons

echo ""
echo "============================================================"
echo "  ✅ COMPLETE!"
echo "============================================================"
echo ""
echo "Generated:"
echo "  ✓ Optimized SVGs in static/icons/optimized/"
echo "  ✓ Metadata in metadata/icons/"
echo "  ✓ React components in packages/icon-design-react/dist/"
echo "  ✓ Svelte components in packages/icon-design-svelte/dist/"
echo "  ✓ Updated icons-index.json"
echo ""
