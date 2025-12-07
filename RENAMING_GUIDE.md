# Icon Renaming Script - Quick Start Guide

## Setup

1. **Install required packages:**
   ```bash
   pip3 install anthropic python-dotenv
   ```

2. **API key is already set in `.env` file** ✓

## Usage

### Test Run (Dry Run - No actual renaming)
```bash
cd "/Users/henriqueibaldo/Library/Mobile Documents/com~apple~CloudDocs/WORK 2/ICONS/website/icon-design"
python3 rename_icons.py
```

This will:
- Process the first 5 icons
- Generate new names using AI
- Show what would be renamed
- Save log to `renaming_log.jsonl`
- **NOT actually rename files** (dry run mode)

### Live Run (Actually rename files)
Edit `rename_icons.py` and change:
```python
DRY_RUN = False  # Change from True to False
MAX_ICONS = 20   # Process more icons
```

Then run:
```bash
python3 rename_icons.py
```

## Configuration Options

In `rename_icons.py`, you can adjust:

```python
BATCH_SIZE = 5      # Icons per API call (5-30 recommended)
MAX_ICONS = 5       # Total icons to process (None = all)
DRY_RUN = True      # False to actually rename files
```

## Output

The script will:
1. Show progress for each batch
2. Display old → new names
3. Log everything to `renaming_log.jsonl`

## Safety Features

✅ Dry run mode by default
✅ Name uniqueness validation
✅ Detailed logging
✅ Batch processing (can stop/resume)
✅ Error handling

## Example Output

```
Processing 5 icons in batches of 5
Mode: DRY RUN

--- Batch 1/1 ---
✓ Renamed: rename-agenda contacts alt1.svg → contact-book-person.svg
✓ Renamed: rename-bookmark.svg → bookmark-ribbon.svg
...
Batch 1 complete

✓ Processing complete!
Check renaming_log.jsonl for detailed rename log
```
