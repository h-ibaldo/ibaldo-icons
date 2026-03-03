/**
 * Smart Naming Utility
 *
 * Generates compact, developer-friendly component names from descriptive filenames
 * Uses deterministic rules instead of AI for predictable, consistent results
 *
 * Key principle: Icons are often exported in series with slight variations
 * (e.g., bell-1, bell-2, bell-3). The algorithm preserves the base concept and
 * variant number while removing redundant descriptive words in the middle.
 */

// Common synonym groups - when multiple words appear together, pick one
// These should be STRONG synonyms (truly interchangeable in context)
// Lists are ordered by preference (first is most preferred)
const SYNONYM_GROUPS = {
  notification: ['notification', 'alarm', 'alert'], // All notification-related
  remove: ['x', 'remove', 'close', 'delete', 'minus', 'negative'], // Prefer X, then Remove
  add: ['add', 'plus', 'positive'],
  check: ['check', 'checked', 'checkmark'],
  settings: ['settings', 'config', 'configuration'],
  search: ['search', 'lupe', 'find'],
  favorite: ['favorite', 'favourite'],
  // Note: Don't include shapes, directions, or other descriptive modifiers
  // as they're often meaningful distinctions
};

// Words to skip (too generic or redundant in middle positions)
const SKIP_WORDS = new Set([
  'icon', 'symbol', 'graphic', 'image',
  'email', 'mail', 'contact', 'address', // These are redundant with "at-sign"
  'analytics', // Too generic, "chart" is enough
  'bolt', // Redundant with "lightning"
  'lines', // Often redundant with "columns" or other descriptors
  'settings', // Redundant when paired with "gear"
]);

/**
 * Generate a compact component name from filename
 * @param {string} filename - Icon filename (without .svg)
 * @returns {string} PascalCase component name
 */
export function generateSmartName(filename) {
  const words = filename.toLowerCase().split('-').filter(w => w.length > 0);

  if (words.length === 0) return 'Icon';

  const result = [];

  // Step 1: Take first word (or first 2 if compound concept like "at-sign")
  let startIndex = 0;
  const firstWord = words[0];

  // Check for compound concepts (hyphenated words that should stay together)
  // But only if they're not part of a larger synonym group
  if (firstWord === 'at' && words.length > 1 && words[1] === 'sign') {
    // Special case: "at-sign" is a specific icon concept
    result.push('AtSign');
    startIndex = 2;
  } else if (firstWord === 'application' && words.length > 1 && words[1] === 'window') {
    // Special case: "application-window" is a specific concept
    result.push('ApplicationWindow');
    startIndex = 2;
  } else {
    result.push(toPascalCase(firstWord));
    startIndex = 1;
  }

  // Step 2: Check if next word is a variant number - if so, append it
  if (startIndex < words.length && /^\d+$/.test(words[startIndex])) {
    // For compound bases like "ApplicationWindow", add as separate element
    // For single bases like "Bell", append to the word
    if (result.length > 1) {
      result.push(words[startIndex]);
    } else {
      result[result.length - 1] += words[startIndex];
    }
    startIndex++;
  }

  // Step 3: Extract end modifiers (skip middle synonym groups)
  // Strategy: Identify synonym groups in the middle, take only last 1-2 unique concepts
  const middleWords = words.slice(startIndex);

  if (middleWords.length === 0) {
    // No middle words, just return the base
    return result.join('');
  }

  // Find positions of synonym groups to skip them
  const synonymGroupPositions = [];
  let i = 0;
  while (i < middleWords.length) {
    const word = middleWords[i];

    // Check if this word starts a synonym group
    let synonymGroupKey = null;
    for (const [key, synonyms] of Object.entries(SYNONYM_GROUPS)) {
      if (synonyms.includes(word)) {
        synonymGroupKey = key;
        break;
      }
    }

    if (synonymGroupKey) {
      // Found a synonym group - mark its range
      const groupStart = i;
      const groupSynonyms = SYNONYM_GROUPS[synonymGroupKey];

      // Find where this synonym group ends
      while (i < middleWords.length && groupSynonyms.includes(middleWords[i])) {
        i++;
      }

      synonymGroupPositions.push({ start: groupStart, end: i - 1, key: synonymGroupKey });
    } else {
      i++;
    }
  }

  // Now extract end concepts: Take last 1-2 meaningful segments from the END
  // A segment is either a unique word OR a synonym group (collapsed to preferred word)
  // We collect segments working backwards, up to maxSegments (2)

  const endConcepts = [];
  const lastIndex = middleWords.length - 1;

  // Count how many non-skipped unique words exist (not in synonym groups, not in SKIP_WORDS)
  const uniqueWordCount = middleWords.filter((word, idx) => {
    const inGroup = synonymGroupPositions.some(g => idx >= g.start && idx <= g.end);
    const isNumber = /^\d+$/.test(word);
    return !inGroup && !SKIP_WORDS.has(word) && !isNumber;
  }).length;

  // Special case: If there's only ONE synonym group covering ALL remaining words
  // AND there are no unique distinguishing words, skip it entirely
  // EXCEPT for "add" group: add/plus/positive is a VISUAL modifier (a + symbol on the icon),
  // so we must include it to avoid collisions (e.g. heart-1 vs heart-1-positive-add-plus)
  const onlyOneGroup = synonymGroupPositions.length === 1 && synonymGroupPositions[0].start === 0 && synonymGroupPositions[0].end === lastIndex;
  const addGroup = synonymGroupPositions[0]?.key === 'add';

  if (onlyOneGroup && uniqueWordCount === 0 && !addGroup) {
    // Skip the entire synonym group - return just the base (e.g., Bell1, Bell2)
    // Don't add anything to endConcepts
  } else if (onlyOneGroup && addGroup && uniqueWordCount === 0) {
    // Include "Add" for add/plus/positive - distinguishes heart-1 from heart-1-positive-add-plus
    endConcepts.push('Add');
  } else if (onlyOneGroup) {
    // If there's only one synonym group but it has unique words mixed in (shouldn't happen with current logic)
    const group = synonymGroupPositions[0];
    const groupWords = middleWords.slice(group.start, group.end + 1);
    // Pick first word from preference order that exists in groupWords
    const preferenceOrder = SYNONYM_GROUPS[group.key];
    const preferred = preferenceOrder.find(w => groupWords.includes(w)) || groupWords[0];
    endConcepts.push(toPascalCase(preferred));
  } else {
    // Standard case: Work backwards, collect up to 2 segments
    // Strategy:
    // - If there are ONLY synonym groups (no unique words), keep ONLY the last synonym group
    // - If there are unique words mixed with synonym groups, keep last 2 segments total

    const numGroups = synonymGroupPositions.length;
    const maxSegments = 2;
    let segmentsCollected = 0;
    let groupsEncountered = 0;
    let uniqueWordsFound = 0; // Track how many unique words we've seen

    i = lastIndex;

    while (i >= 0 && segmentsCollected < maxSegments) {
      const word = middleWords[i];

      // Skip numbers except trailing ones
      if (/^\d+$/.test(word)) {
        if (i === lastIndex) {
          endConcepts.unshift(word);
        }
        i--;
        continue;
      }

      // Skip generic words
      if (SKIP_WORDS.has(word)) {
        i--;
        continue;
      }

      // Check if this position is inside a synonym group
      const inGroup = synonymGroupPositions.find(g => i >= g.start && i <= g.end);

      if (inGroup) {
        groupsEncountered++;

        // Include this synonym group if:
        // 1. There are 2+ synonym groups BUT there are also unique words (keep last synonym group + unique words)
        // 2. OR it's the LAST/only group AND we haven't found any unique words yet (it's at the END)
        // 3. BUT if there are ONLY synonym groups (no unique words), ONLY include the FIRST group we encounter (last in the list)
        const isAtEnd = uniqueWordsFound === 0;
        const onlyGroups = uniqueWordCount === 0;

        let shouldInclude = false;
        if (onlyGroups) {
          // If there are ONLY synonym groups, include ONLY the last one (first encountered)
          shouldInclude = groupsEncountered === 1;
        } else {
          // If there are unique words, include synonym groups at the end
          shouldInclude = (numGroups >= 2 && groupsEncountered <= 2) || isAtEnd;
        }

        if (shouldInclude) {
          const groupWords = middleWords.slice(inGroup.start, inGroup.end + 1);
          // Pick the first word from the synonym group's preference order that exists in groupWords
          const preferenceOrder = SYNONYM_GROUPS[inGroup.key];
          const preferred = preferenceOrder.find(w => groupWords.includes(w)) || groupWords[0];
          endConcepts.unshift(toPascalCase(preferred));
          segmentsCollected++;
        }

        // Jump past the entire group
        i = inGroup.start - 1;
      } else {
        // Not in a synonym group - it's a unique modifier, always keep it
        endConcepts.unshift(toPascalCase(word));
        segmentsCollected++;
        uniqueWordsFound++;
        i--;
      }
    }
  }

  // Step 4: Combine base + end concepts
  result.push(...endConcepts);

  // Step 5: Limit to max 4 words
  const finalName = result.slice(0, 4).join('');

  return finalName || 'Icon';
}

/**
 * Convert word to PascalCase
 * @param {string} word
 * @returns {string}
 */
function toPascalCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Convert full filename to PascalCase. Used for collision resolution - guarantees
 * a unique name since filenames are unique. Preserves all parts of the filename.
 * @param {string} filename - Icon filename without .svg (e.g. "heart-1-positive-add-plus")
 * @returns {string} Full PascalCase name (e.g. "Heart1PositiveAddPlus")
 */
export function filenameToUniquePascalCase(filename) {
  if (!filename || typeof filename !== 'string') return 'Icon';
  return filename
    .split(/[-_\s]+/)
    .filter((w) => w.length > 0)
    .map((w) => toPascalCase(w))
    .join('') || 'Icon';
}

/**
 * Test the naming function with example filenames
 */
export function testNaming() {
  const tests = [
    { filename: 'bell-4-notification-alarm-alert-x-close-delete-remove-circle', expected: 'Bell4XCircle' },
    { filename: 'bell-2-notification-alarm-alert-clock', expected: 'Bell2Clock' },
    { filename: 'at-sign-email-contact-address-1-remove-negative-minus-delete', expected: 'AtSignRemove' },
    { filename: 'application-window-1-chart-analytics-2', expected: 'ApplicationWindow1Chart2' },
    { filename: 'chart-arrow-up-circle-check', expected: 'ChartCircleCheck' },
    { filename: 'calendar-lightning-bolt', expected: 'CalendarLightning' },
    { filename: 'gear-settings-1', expected: 'Gear1' },
    { filename: 'chart-vertical-columns-lines-square', expected: 'ChartColumnsSquare' },

    // Icon series tests (numbered variants should be consistent)
    { filename: 'bell-1-notification-alarm-alert', expected: 'Bell1' },
    { filename: 'bell-2-notification-alarm-alert', expected: 'Bell2' },
    { filename: 'bell-3-notification-alarm-alert-sounding', expected: 'Bell3Sounding' },
    { filename: 'bell-1', expected: 'Bell1' },
    { filename: 'user-head-1', expected: 'UserHead1' },
    { filename: 'user-head-2', expected: 'UserHead2' },
  ];

  console.log('\n🧪 Testing Smart Naming:\n');
  tests.forEach(({ filename, expected }) => {
    const result = generateSmartName(filename);
    const status = result === expected ? '✅' : '❌';
    console.log(`${status} ${filename}`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Got:      ${result}\n`);
  });
}
