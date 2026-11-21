// Ibaldo Icons MCP server: protocol + tools, with no framework or Node-only code.
// The SvelteKit route (src/routes/mcp/+server.js) and scripts/test-mcp.js both
// build it with createMcpServer({ index, loadChunk }).
//
// Stateless Streamable HTTP: every POST carries one JSON-RPC message (or a batch)
// and gets a plain JSON reply. No sessions, no SSE, no AI calls.

export const SERVER_NAME = 'ibaldo-icons';
export const SERVER_VERSION = '1.0.0';
export const SUPPORTED_PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26', '2024-11-05'];

const PACKAGES = {
	react: '@ibaldo/icons-react',
	svelte: '@ibaldo/icons-svelte',
	vue: '@ibaldo/icons-vue',
	'react-native': '@ibaldo/icons-react-native'
};
const FORMATS = ['svg', ...Object.keys(PACKAGES)];

// Words from NAMING-GUIDE.md, used to label the parts of a name.
const TWO_WORD_FAMILIES = [
	'AvatarHead',
	'AvatarFace',
	'AddressBook',
	'HardDrive',
	'ProgressBar',
	'ScreenShare'
];
const BADGES = new Set(
	'Plus Minus X Check CheckDouble Alert Warning Question Info Off Ban Dot Ring Snooze Lock Unlock Clock Search Settings Edit Eye Sync Refresh Upload Download Arrow Transfer Link Star Heart Mail User Shield Bolt Music Dots Dollar Pin Paperclip Chat Happy Sad Laugh Typing Reply ReplyAll Forward Image Video Quote Hash Letters One Two Three Five Seven Ten Fifteen Seventeen Thirty ThirtyOne Percent Translate'.split(
		' '
	)
);
const CONTAINERS = new Set(
	'Circle Square Octagon Hexagon Triangle Diamond Pentagon Dashed Dotted Striped Filled'.split(' ')
);
const DIRECTIONS = new Set(
	'Up Down Left Right UpDown LeftRight UpRight UpLeft DownRight DownLeft Clockwise Counterclockwise In Out'.split(
		' '
	)
);
const STATES = new Set('Open Closed On Empty Half Full Low Medium High Stack Double'.split(' '));
const SIZES = new Set('Small Large XS XL'.split(' '));
const STYLES = new Set(
	'Rim Knob Flat Dash Wide Tall Narrow Round Sharp Curved Boxy Step Striped Bare Plain Thin Thick Grille Chevron Tooltip Slant Broken Pointed Side Layered Facing Notch Flipped Staggered Long Short Vertical Slim Curl Arc Straight Tick Detached Barrel Cushion Ripple RippleDouble Stem Semicircle Split ThreeQuarter Arch Overlap Shadow Slot Bar Flip Tilted Block Bucket Slanted Bracket Notched Clip Compact Interlocked Banner Hook Folded Stripe Cut Large'.split(
		' '
	)
);
// Words people (and agents) type -> the words the names use. From the synonym
// table in NAMING-GUIDE.md plus common UI intents.
const SYNONYMS = {
	envelope: ['mail'],
	email: ['mail'],
	lupe: ['search'],
	magnifier: ['search'],
	magnifying: ['search'],
	zoom: ['search'],
	bulb: ['lightbulb'],
	idea: ['lightbulb'],
	lightning: ['bolt'],
	energy: ['bolt'],
	flash: ['bolt'],
	message: ['chat'],
	speech: ['chat'],
	bubble: ['chat'],
	comment: ['chat'],
	graph: ['chart'],
	contacts: ['addressbook'],
	language: ['translate'],
	translation: ['translate'],
	home: ['house'],
	close: ['x'],
	cancel: ['x'],
	delete: ['trash', 'x'],
	remove: ['minus', 'x'],
	add: ['plus'],
	new: ['plus'],
	user: ['avatar'],
	person: ['avatar'],
	profile: ['avatar'],
	account: ['avatar'],
	settings: ['gear'],
	cog: ['gear'],
	notification: ['bell'],
	alarm: ['bell'],
	hidden: ['off'],
	hide: ['off'],
	mute: ['off'],
	disabled: ['off'],
	done: ['check'],
	ok: ['check'],
	success: ['check'],
	error: ['alert', 'x'],
	danger: ['warning'],
	help: ['question'],
	time: ['clock'],
	date: ['calendar'],
	location: ['pin'],
	map: ['pin'],
	attach: ['paperclip'],
	attachment: ['paperclip'],
	reload: ['refresh'],
	favorite: ['star', 'heart'],
	like: ['heart'],
	basket: ['cart'],
	picture: ['image'],
	photo: ['image']
};

const COMPOUNDS = new Set(
	[...BADGES, ...DIRECTIONS, ...STYLES].filter((w) => splitWords(w).length > 1)
);

export function splitWords(name) {
	return name.match(/[A-Z]{2,}(?=[A-Z][a-z]|\d|$)|[A-Z][a-z]*|[a-z]+|\d+/g) || [];
}

function normalize(text) {
	return String(text || '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '');
}

// "notification bell-clock" / "BellClock" -> ["notification", "bell", "clock"]
function queryTokens(query) {
	return String(query || '')
		.split(/[^A-Za-z0-9]+/)
		.flatMap((part) => (/[a-z][A-Z]/.test(part) ? splitWords(part) : [part]))
		.map((t) => t.toLowerCase())
		.filter(Boolean);
}

// Merge words that only mean something together ("Check" + "Double").
function mergeCompounds(words) {
	const out = [];
	for (let i = 0; i < words.length; i++) {
		const pair = words[i] + (words[i + 1] || '');
		if (words[i + 1] && COMPOUNDS.has(pair)) {
			out.push(pair);
			i++;
		} else out.push(words[i]);
	}
	return out;
}

function describeParts(name, family) {
	const rest = mergeCompounds(splitWords(name).slice(splitWords(family).length));
	const parts = [];
	rest.forEach((word, i) => {
		const last = i === rest.length - 1;
		let role;
		if (/^\d+$/.test(word)) role = 'near-duplicate';
		else if (
			last &&
			rest.length > 0 &&
			STYLES.has(word) &&
			!BADGES.has(word) &&
			!CONTAINERS.has(word)
		)
			role = 'style';
		else if (BADGES.has(word)) role = 'badge';
		else if (CONTAINERS.has(word)) role = 'container';
		else if (DIRECTIONS.has(word)) role = 'direction';
		else if (STATES.has(word)) role = 'state';
		else if (SIZES.has(word)) role = 'size';
		else if (STYLES.has(word)) role = 'style';
		else role = 'variant';
		parts.push(`${role} ${word}`);
	});
	return parts.length ? parts.join(' · ') : 'base drawing';
}

// Levenshtein distance with an early exit once it passes max.
function editDistance(a, b, max) {
	if (Math.abs(a.length - b.length) > max) return max + 1;
	let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
	for (let i = 1; i <= a.length; i++) {
		const cur = [i];
		let rowMin = i;
		for (let j = 1; j <= b.length; j++) {
			cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
			if (cur[j] < rowMin) rowMin = cur[j];
		}
		if (rowMin > max) return max + 1;
		prev = cur;
	}
	return prev[b.length];
}

function errorText(text) {
	return { content: [{ type: 'text', text }], isError: true };
}

function okText(text) {
	return { content: [{ type: 'text', text }] };
}

function okJson(value) {
	return okText(JSON.stringify(value, null, 1));
}

// Rounds coordinates to 3 decimals without changing the drawing, and moves the
// shared stroke attributes to the <svg> element. Keeps the "no leading zero"
// form so compact path data like "-.5.5" still parses the same way.
function roundNumber(token) {
	const n = Number(token);
	if (!Number.isFinite(n)) return token;
	let s = n
		.toFixed(3)
		.replace(/(\.\d*?[1-9])0+$/, '$1')
		.replace(/\.0+$/, '.0');
	if (/^-?\./.test(token)) s = s.replace(/^(-?)0\./, '$1.');
	return s;
}

export function cleanSvg(raw) {
	const inner = raw
		.replace(/^[\s\S]*?<svg[^>]*>/, '')
		.replace(/<\/svg>\s*$/, '')
		.replace(
			/\s(fill="none"|stroke="currentColor"|stroke-linecap="round"|stroke-linejoin="round")/g,
			''
		)
		.replace(/-?\d*\.\d+(?:e-?\d+)?/gi, (token, offset, str) => {
			const out = roundNumber(token);
			// ".9999" -> "1.0": add a space so it can't merge with the number before it.
			return /^\d/.test(out) && /[\d.]/.test(str[offset - 1] || '') ? ' ' + out : out;
		})
		.replace(/\n\s*/g, '')
		.trim();
	return (
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
		inner +
		'</svg>'
	);
}

function snippet(name, format) {
	const pkg = PACKAGES[format];
	if (format === 'react')
		return `import { ${name} } from '${pkg}';\n\n<${name} size={24} strokeWidth={1.5} />`;
	if (format === 'svelte')
		return `<script>\n  import { ${name} } from '${pkg}';\n</script>\n\n<${name} size={24} strokeWidth={1.5} />`;
	if (format === 'vue')
		return `<script setup>\nimport { ${name} } from '${pkg}';\n</script>\n\n<template>\n  <${name} :size="24" :stroke-width="1.5" />\n</template>`;
	return `// needs react-native-svg\nimport { ${name} } from '${pkg}';\n\n<${name} size={24} color="#111" strokeWidth={1.5} />`;
}

export const INSTRUCTIONS = `Ibaldo Icons: about {COUNT} line icons (MIT) with predictable names.
How to use:
1. search_icons with plain words ("notification bell clock"). Pick a name from the results.
2. get_icon with that name and the format you need: "svg", "react", "svelte", "vue" or "react-native".
3. list_variants when you want every version of one drawn object (all Bell icons) to pick the exact one.
Names: <Family><Variant?><Badge?><Direction?><Container?><Style?>, e.g. BellXCircleRim = bell, X badge in a circle, Rim style. Old names (aliases) still resolve to the current name; always use the current name.
Icons are 24x24, stroke currentColor, round caps and joins, default stroke width 1.5. The packages (@ibaldo/icons-react, -svelte, -vue, -react-native) take size, color and strokeWidth props. Never invent icon names: search first.`;

const TOOLS = [
	{
		name: 'search_icons',
		title: 'Search icons',
		description:
			'Find icons by plain words (what is drawn, what it is for, or an old name). Returns ranked names with family, tags and why each matched. Use the name with get_icon.',
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description: 'Plain words, e.g. "notification bell clock" or "upload cloud".'
				},
				limit: {
					type: 'integer',
					minimum: 1,
					maximum: 50,
					default: 10,
					description: 'Max results (default 10).'
				},
				category: {
					type: 'string',
					description: 'Optional category filter, e.g. "communication". See list_categories.'
				}
			},
			required: ['query'],
			additionalProperties: false
		},
		annotations: { readOnlyHint: true, openWorldHint: false }
	},
	{
		name: 'get_icon',
		title: 'Get icon',
		description:
			'Get one icon by exact name (old names work too): SVG markup, or the import and usage code for React, Svelte, Vue or React Native.',
		inputSchema: {
			type: 'object',
			properties: {
				name: { type: 'string', description: 'Icon name from search_icons, e.g. "BellClock".' },
				format: {
					type: 'string',
					enum: FORMATS,
					default: 'svg',
					description: 'What to return (default "svg").'
				}
			},
			required: ['name'],
			additionalProperties: false
		},
		annotations: { readOnlyHint: true, openWorldHint: false }
	},
	{
		name: 'list_variants',
		title: 'List variants',
		description:
			'List every icon in one family (the drawn object, the first word of the name, e.g. "Bell" or "AvatarFace"), with the parts of each name (badge, container, style...), so you can pick the exact version.',
		inputSchema: {
			type: 'object',
			properties: {
				family: {
					type: 'string',
					description: 'Family or name prefix, e.g. "Bell", "Cloud", "BellRing", "AvatarFace".'
				}
			},
			required: ['family'],
			additionalProperties: false
		},
		annotations: { readOnlyHint: true, openWorldHint: false }
	},
	{
		name: 'list_categories',
		title: 'List categories',
		description:
			'List the icon categories with how many icons each has. Use one as the category filter in search_icons.',
		inputSchema: { type: 'object', properties: {}, additionalProperties: false },
		annotations: { readOnlyHint: true, openWorldHint: false }
	}
];

/**
 * @param {{ index: any, loadChunk: (chunkPath: string) => Promise<Record<string,string>> }} deps
 *   index: parsed static/icons-index.json
 *   loadChunk: returns the { filename: svg } map for a path from index.chunks
 */
export function createMcpServer({ index, loadChunk }) {
	const icons = (Array.isArray(index.icons) ? index.icons : Object.values(index.icons).flat()).map(
		(icon) => {
			const words = splitWords(icon.name);
			return {
				icon,
				words: words.map((w) => w.toLowerCase()),
				lower: icon.name.toLowerCase(),
				aliases: (icon.aliases || []).map((a) => ({
					name: a,
					lower: a.toLowerCase(),
					words: splitWords(a).map((w) => w.toLowerCase())
				})),
				tags: (icon.tags || []).map((t) => t.toLowerCase()),
				tagWords: new Set((icon.tags || []).flatMap((t) => t.toLowerCase().split('-'))),
				text: ' ' + (icon.searchText || '') + ' ' + (icon.description || '').toLowerCase() + ' '
			};
		}
	);
	const byName = new Map(icons.map((e) => [e.lower, e]));
	const byAlias = new Map();
	for (const e of icons)
		for (const a of e.aliases) if (!byName.has(a.lower)) byAlias.set(a.lower, e);

	// Family = first word, or a known two-word family, or two words when every
	// icon that starts with the first word also shares the second (HardDrive).
	const firstWordGroups = new Map();
	for (const e of icons) {
		const w = splitWords(e.icon.name);
		if (!firstWordGroups.has(w[0])) firstWordGroups.set(w[0], []);
		firstWordGroups.get(w[0]).push(w);
	}
	const families = new Set();
	function familyOf(name) {
		const w = splitWords(name);
		const two = w[0] + (w[1] || '');
		if (w[1] && TWO_WORD_FAMILIES.includes(two)) return two;
		const group = firstWordGroups.get(w[0]) || [];
		if (w[1] && group.length > 1 && group.every((g) => g[1] === w[1]) && !/^\d+$/.test(w[1]))
			return two;
		return w[0];
	}
	for (const e of icons) {
		e.family = familyOf(e.icon.name);
		families.add(e.family);
	}

	const categoryCounts = {};
	for (const e of icons)
		for (const c of e.icon.categories || []) categoryCounts[c] = (categoryCounts[c] || 0) + 1;

	function resolve(name) {
		const key = normalize(name);
		if (byName.has(key)) return { entry: byName.get(key) };
		const viaAlias = byAlias.get(key);
		if (viaAlias)
			return { entry: viaAlias, alias: viaAlias.aliases.find((a) => a.lower === key).name };
		return null;
	}

	function matchWord(e, t) {
		const wi = e.words.indexOf(t);
		if (wi === 0) return { s: 40, kind: 'name' };
		if (wi > 0) return { s: 30, kind: 'name' };
		if (e.aliases.some((a) => a.words.includes(t))) return { s: 12, kind: 'alias' };
		if (e.tags.includes(t) || e.tagWords.has(t)) return { s: 12, kind: 'tag' };
		if (t.length >= 3 && e.words.some((w) => w.startsWith(t))) return { s: 8, kind: 'name' };
		if (t.length >= 3 && e.tags.some((g) => g.startsWith(t))) return { s: 6, kind: 'tag' };
		if (e.text.includes(' ' + t)) return { s: 4, kind: 'text' };
		if (t.length >= 4 && e.text.includes(t)) return { s: 2, kind: 'text' };
		return { s: 0, kind: null };
	}

	function scoreEntry(e, tokens, compact) {
		let score = 0;
		const reasons = [];
		let matched = 0;
		if (compact && e.lower === compact) {
			score += 1000;
			reasons.push('exact name');
		} else if (compact && e.aliases.some((a) => a.lower === compact)) {
			score += 900;
			reasons.push(`old name ${e.aliases.find((a) => a.lower === compact).name}`);
		}
		const hits = { name: [], alias: [], tag: [], text: [] };
		for (const t of tokens) {
			let best = { s: 0, kind: null };
			for (const [i, word] of [t, ...(SYNONYMS[t] || [])].entries()) {
				const m = matchWord(e, word);
				const sc = i === 0 ? m.s : m.s * 0.9; // the word itself beats a synonym
				if (sc > best.s) best = { s: sc, kind: m.kind };
			}
			if (best.kind) {
				matched++;
				score += best.s;
				hits[best.kind].push(t);
			}
		}
		if (score >= 900)
			return { score: score - e.words.length * 0.5, matched: tokens.length, reason: reasons[0] };
		if (hits.name.length) reasons.push(`name has ${hits.name.join(', ')}`);
		if (hits.alias.length) reasons.push(`old name has ${hits.alias.join(', ')}`);
		if (hits.tag.length) reasons.push(`tags: ${hits.tag.join(', ')}`);
		if (hits.text.length) reasons.push(`description: ${hits.text.join(', ')}`);
		// Prefer simpler drawings when scores tie: Bell before BellXCircleWide.
		score -= e.words.length * 0.5;
		if (e.icon.featured) score += 0.2;
		return { score, matched, reason: reasons.join('; ') };
	}

	function searchIcons({ query, limit = 10, category } = {}) {
		if (typeof query !== 'string' || !query.trim())
			return errorText('query is required, e.g. "notification bell".');
		const max = Math.max(
			1,
			Math.min(50, Number.isFinite(Number(limit)) ? Math.floor(Number(limit)) : 10)
		);
		const cat = category ? String(category).toLowerCase().trim() : null;
		if (cat && !categoryCounts[cat])
			return errorText(
				`Unknown category "${category}". Categories: ${Object.keys(categoryCounts).sort().join(', ')}.`
			);
		const tokens = queryTokens(query);
		const compact = normalize(query);
		const scored = [];
		for (const e of icons) {
			if (cat && !(e.icon.categories || []).includes(cat)) continue;
			const r = scoreEntry(e, tokens, compact);
			if (r.matched || r.score > 100) scored.push({ e, ...r });
		}
		const full = scored.filter((r) => r.matched === tokens.length || r.score > 100);
		const pool = full.length ? full : scored;
		pool.sort((a, b) => b.score - a.score || a.e.icon.name.localeCompare(b.e.icon.name));
		const results = pool.slice(0, max).map(({ e, reason }) => ({
			name: e.icon.name,
			family: e.family,
			tags: e.icon.tags.slice(0, 6),
			reason,
			import: `import { ${e.icon.name} } from '@ibaldo/icons-react';`
		}));
		const out = {
			query,
			total: pool.length,
			note: full.length
				? undefined
				: results.length
					? 'No icon matched every word; these match some of them.'
					: 'No match. Try fewer or simpler words (what is drawn), or list_categories.',
			imports:
				"Same name in every package: '@ibaldo/icons-react' | '-svelte' | '-vue' | '-react-native'. Use get_icon for SVG or full usage.",
			results
		};
		return okJson(out);
	}

	// Closest names by spelling first (typos), then by shared words.
	function closest(query, candidates, n) {
		const q = normalize(query);
		const maxDist = Math.max(2, Math.floor(q.length / 4));
		return candidates
			.map((c) => ({ c, d: editDistance(q, c.toLowerCase(), maxDist) }))
			.filter((x) => x.d <= maxDist)
			.sort((a, b) => a.d - b.d || a.c.length - b.c.length)
			.slice(0, n)
			.map((x) => x.c);
	}

	function suggestions(name, n = 3) {
		const out = closest(
			name,
			icons.map((e) => e.icon.name),
			n
		);
		const tokens = queryTokens(name);
		const compact = normalize(name);
		const byWords = icons
			.map((e) => ({ e, ...scoreEntry(e, tokens, compact) }))
			.filter((r) => r.matched)
			.sort((a, b) => b.matched - a.matched || b.score - a.score)
			.map((r) => r.e.icon.name);
		for (const w of byWords) if (out.length < n && !out.includes(w)) out.push(w);
		return out;
	}

	async function getIcon({ name, format = 'svg' } = {}) {
		if (typeof name !== 'string' || !name.trim())
			return errorText('name is required, e.g. "BellClock".');
		const fmt = String(format || 'svg').toLowerCase();
		if (!FORMATS.includes(fmt))
			return errorText(`Unknown format "${format}". Use one of: ${FORMATS.join(', ')}.`);
		const found = resolve(name);
		if (!found) {
			const s = suggestions(name);
			return errorText(
				`No icon named "${name}".` +
					(s.length ? ` Did you mean: ${s.join(', ')}?` : '') +
					' Use search_icons to find names.'
			);
		}
		const { entry, alias } = found;
		const icon = entry.icon;
		const head = [
			`name: ${icon.name}`,
			`family: ${entry.family}`,
			`description: ${icon.description || icon.displayName}`
		];
		if (alias) head.push(`note: "${alias}" is an old name; use ${icon.name}.`);
		if (fmt === 'svg') {
			const chunkPath = index.chunks?.[icon.chunk];
			const chunk = chunkPath ? await loadChunk(chunkPath) : null;
			const raw = chunk?.[icon.filename];
			if (!raw)
				return errorText(`SVG for ${icon.name} is not available right now. Try format "react".`);
			return okText(head.join('\n') + '\n\n' + cleanSvg(raw));
		}
		head.push(`package: ${PACKAGES[fmt]}`);
		return okText(head.join('\n') + '\n\n' + snippet(icon.name, fmt));
	}

	function listVariants({ family } = {}) {
		if (typeof family !== 'string' || !family.trim())
			return errorText('family is required, e.g. "Bell".');
		const want = splitWords(
			family
				.trim()
				.replace(/^[a-z]/, (c) => c.toUpperCase())
				.replace(/[\s_-]+(\w)/g, (_, c) => c.toUpperCase())
		);
		const wantLower = want.map((w) => w.toLowerCase());
		const matches = icons.filter((e) => wantLower.every((w, i) => e.words[i] === w));
		if (!matches.length) {
			const fam = closest(family, [...families], 5);
			const s = suggestions(family);
			return errorText(
				`No family "${family}".` +
					(fam.length ? ` Families like it: ${fam.join(', ')}.` : '') +
					(s.length ? ` Icons like it: ${s.join(', ')}.` : '') +
					' Use search_icons with plain words.'
			);
		}
		matches.sort(
			(a, b) => a.words.length - b.words.length || a.icon.name.localeCompare(b.icon.name)
		);
		const MAX = 200;
		const prefix =
			matches[0].family.length <= want.join('').length ? want.join('') : matches[0].family;
		const variants = {};
		for (const e of matches.slice(0, MAX))
			variants[e.icon.name] = describeParts(e.icon.name, prefix);
		return okJson({
			family: want.join(''),
			count: matches.length,
			note:
				matches.length > MAX
					? `Showing ${MAX} of ${matches.length}. Use a longer prefix (e.g. "${want.join('')}Circle") to narrow.`
					: 'Parts follow the naming guide: no style word = the most neutral drawing.',
			variants
		});
	}

	function listCategories() {
		return okJson(
			Object.fromEntries(Object.entries(categoryCounts).sort((a, b) => a[0].localeCompare(b[0])))
		);
	}

	const handlers = {
		search_icons: searchIcons,
		get_icon: getIcon,
		list_variants: listVariants,
		list_categories: listCategories
	};

	const instructions = INSTRUCTIONS.replace(
		'{COUNT}',
		String(Math.floor(icons.length / 100) * 100)
	);

	function rpcError(id, code, message) {
		return { jsonrpc: '2.0', id: id ?? null, error: { code, message } };
	}

	/** Handles one JSON-RPC message. Returns the response, or null for notifications. */
	async function handleMessage(msg) {
		if (
			!msg ||
			typeof msg !== 'object' ||
			msg.jsonrpc !== '2.0' ||
			typeof msg.method !== 'string'
		) {
			if (msg && typeof msg === 'object' && ('result' in msg || 'error' in msg)) return null; // client response
			return rpcError(msg?.id, -32600, 'Invalid Request');
		}
		const isNotification = !('id' in msg);
		const { id, method, params = {} } = msg;
		if (isNotification) return null;
		try {
			switch (method) {
				case 'initialize': {
					const asked = params?.protocolVersion;
					const protocolVersion = SUPPORTED_PROTOCOL_VERSIONS.includes(asked)
						? asked
						: SUPPORTED_PROTOCOL_VERSIONS[0];
					return {
						jsonrpc: '2.0',
						id,
						result: {
							protocolVersion,
							capabilities: { tools: { listChanged: false } },
							serverInfo: { name: SERVER_NAME, title: 'Ibaldo Icons', version: SERVER_VERSION },
							instructions
						}
					};
				}
				case 'ping':
					return { jsonrpc: '2.0', id, result: {} };
				case 'tools/list':
					return { jsonrpc: '2.0', id, result: { tools: TOOLS } };
				case 'tools/call': {
					const handler = handlers[params?.name];
					if (!handler) return rpcError(id, -32602, `Unknown tool: ${params?.name}`);
					const result = await handler(params.arguments || {});
					return { jsonrpc: '2.0', id, result };
				}
				case 'resources/list':
					return { jsonrpc: '2.0', id, result: { resources: [] } };
				case 'prompts/list':
					return { jsonrpc: '2.0', id, result: { prompts: [] } };
				default:
					return rpcError(id, -32601, `Method not found: ${method}`);
			}
		} catch (err) {
			return rpcError(id, -32603, 'Internal error');
		}
	}

	return { handleMessage, tools: TOOLS, instructions, iconCount: icons.length };
}
