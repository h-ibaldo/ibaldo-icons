#!/usr/bin/env node
// Tests the Ibaldo Icons MCP server.
//   node scripts/test-mcp.js                          -> calls the handler directly (no server)
//   node scripts/test-mcp.js http://localhost:5199/mcp -> same checks over HTTP against a running site
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createMcpServer } from '../src/lib/server/mcp/core.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const url = process.argv[2];
const MAX_BYTES = 20_000; // every reply must stay small (Vercel free tier, agent context)

let send;
if (url) {
	send = async (msg) => {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json, text/event-stream'
			},
			body: JSON.stringify(msg)
		});
		const text = await res.text();
		return {
			status: res.status,
			bytes: Buffer.byteLength(text),
			body: text ? JSON.parse(text) : null,
			headers: res.headers
		};
	};
} else {
	const index = JSON.parse(readFileSync(join(ROOT, 'static/icons-index.json'), 'utf8'));
	const mcp = createMcpServer({
		index,
		loadChunk: async (p) => JSON.parse(readFileSync(join(ROOT, 'static', p), 'utf8'))
	});
	send = async (msg) => {
		const body = await mcp.handleMessage(msg);
		const text = body ? JSON.stringify(body) : '';
		return { status: body ? 200 : 202, bytes: Buffer.byteLength(text), body };
	};
}

let passed = 0;
let failed = 0;
let nextId = 1;
function check(label, ok, detail = '') {
	if (ok) passed++;
	else failed++;
	console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}${detail ? '  ' + detail : ''}`);
}
async function call(name, args) {
	const r = await send({
		jsonrpc: '2.0',
		id: nextId++,
		method: 'tools/call',
		params: { name, arguments: args }
	});
	check(`${name} reply under ${MAX_BYTES} bytes`, r.bytes < MAX_BYTES, `(${r.bytes} B)`);
	const result = r.body?.result;
	return { result, text: result?.content?.[0]?.text || '', isError: !!result?.isError, raw: r };
}

const init = await send({
	jsonrpc: '2.0',
	id: nextId++,
	method: 'initialize',
	params: {
		protocolVersion: '2025-06-18',
		capabilities: {},
		clientInfo: { name: 'test', version: '0' }
	}
});
check('initialize returns server info', init.body?.result?.serverInfo?.name === 'ibaldo-icons');
check('initialize echoes protocol version', init.body?.result?.protocolVersion === '2025-06-18');
check('initialize has instructions', /search_icons/.test(init.body?.result?.instructions || ''));
const unknownVersion = await send({
	jsonrpc: '2.0',
	id: nextId++,
	method: 'initialize',
	params: { protocolVersion: '1999-01-01' }
});
check(
	'unknown protocol version falls back to latest',
	/^20\d\d-/.test(unknownVersion.body?.result?.protocolVersion)
);

const note = await send({ jsonrpc: '2.0', method: 'notifications/initialized' });
check('notification gets 202 and no body', note.status === 202 && !note.body);
const ping = await send({ jsonrpc: '2.0', id: nextId++, method: 'ping' });
check('ping', ping.body?.result && Object.keys(ping.body.result).length === 0);

const list = await send({ jsonrpc: '2.0', id: nextId++, method: 'tools/list' });
const names = (list.body?.result?.tools || []).map((t) => t.name);
check(
	'tools/list has the 4 tools',
	['search_icons', 'get_icon', 'list_variants', 'list_categories'].every((n) => names.includes(n)),
	names.join(', ')
);

let r = await call('search_icons', { query: 'notification bell clock' });
let data = JSON.parse(r.text || '{}');
check(
	'search "notification bell clock" -> BellClock first',
	data.results?.[0]?.name === 'BellClock',
	data.results
		?.slice(0, 3)
		.map((x) => x.name)
		.join(', ')
);

r = await call('search_icons', { query: 'bell' });
data = JSON.parse(r.text || '{}');
check(
	'search "bell" -> Bell first',
	data.results?.[0]?.name === 'Bell',
	data.results
		?.slice(0, 3)
		.map((x) => x.name)
		.join(', ')
);
check('search returns 10 by default', data.results?.length === 10);
check(
	'search results have family/tags/reason/import',
	['family', 'tags', 'reason', 'import'].every((k) => k in (data.results?.[0] || {}))
);

r = await call('search_icons', { query: 'BellXCircleRim' });
data = JSON.parse(r.text || '{}');
check('exact name ranks first', data.results?.[0]?.name === 'BellXCircleRim');

r = await call('search_icons', { query: 'Bell2Clock' });
data = JSON.parse(r.text || '{}');
check(
	'old name (alias) Bell2Clock -> BellClock',
	data.results?.[0]?.name === 'BellClock',
	data.results?.[0]?.reason
);

r = await call('search_icons', { query: 'upload cloud', limit: 3, category: 'files' });
data = JSON.parse(r.text || '{}');
check(
	'limit + category filter',
	data.results?.length <= 3 && data.results.every((x) => /Cloud/.test(x.name)),
	data.results?.map((x) => x.name).join(', ')
);

r = await call('search_icons', { query: 'xyzzyqqq' });
data = JSON.parse(r.text || '{}');
check('no-match search is graceful', data.results?.length === 0 && /No match/.test(data.note));

r = await call('search_icons', { query: 'bell', category: 'nope' });
check('unknown category -> tool error', r.isError);

r = await call('search_icons', { query: 'a', limit: 500 });
data = JSON.parse(r.text || '{}');
check('limit is capped at 50', data.results?.length <= 50);

r = await call('get_icon', { name: 'BellClock' });
check(
	'get_icon svg',
	/^<svg[^>]*viewBox="0 0 24 24"[^>]*stroke="currentColor"/m.test(r.text.split('\n\n')[1] || ''),
	`(${r.text.length} chars)`
);
check('svg has no long decimals', !/\d\.\d{4,}/.test(r.text));

r = await call('get_icon', { name: 'Bell2Clock', format: 'react' });
check(
	'get_icon by alias resolves + says old name',
	/name: BellClock/.test(r.text) && /old name/.test(r.text) && /@ibaldo\/icons-react'/.test(r.text)
);
for (const format of ['svelte', 'vue', 'react-native']) {
	r = await call('get_icon', { name: 'bellclock', format });
	check(
		`get_icon ${format} snippet`,
		r.text.includes(`@ibaldo/icons-${format}'`) && r.text.includes('BellClock')
	);
}
r = await call('get_icon', { name: 'BellClok' });
check(
	'unknown name -> error + suggestions',
	r.isError && /Did you mean: BellClock/.test(r.text),
	r.text
);
r = await call('get_icon', { name: 'Bell', format: 'angular' });
check('bad format -> error', r.isError);

r = await call('list_variants', { family: 'Bell' });
data = JSON.parse(r.text || '{}');
check(
	'list_variants Bell lists all bells',
	data.count > 50 && data.variants?.BellXCircleRim,
	`(${data.count} icons)`
);
check(
	'variant parts labelled',
	/style Rim/.test(data.variants?.BellXCircleRim || '') &&
		/badge X/.test(data.variants?.BellXCircleRim || ''),
	data.variants?.BellXCircleRim
);
r = await call('list_variants', { family: 'avatar face' });
data = JSON.parse(r.text || '{}');
check(
	'list_variants two-word family "avatar face"',
	data.count > 5 && Object.keys(data.variants).every((n) => n.startsWith('AvatarFace'))
);
r = await call('list_variants', { family: 'Arrow' });
data = JSON.parse(r.text || '{}');
check(
	'big family is capped',
	Object.keys(data.variants || {}).length <= 200,
	`(${data.count} total)`
);
r = await call('list_variants', { family: 'Belll' });
check('unknown family -> error', r.isError, r.text);

r = await call('list_categories', {});
data = JSON.parse(r.text || '{}');
check('list_categories', data.communication > 0);

const bad = await send({
	jsonrpc: '2.0',
	id: nextId++,
	method: 'tools/call',
	params: { name: 'nope', arguments: {} }
});
check('unknown tool -> JSON-RPC error', bad.body?.error?.code === -32602);
const unknownMethod = await send({ jsonrpc: '2.0', id: nextId++, method: 'foo/bar' });
check('unknown method -> -32601', unknownMethod.body?.error?.code === -32601);

if (url) {
	const batch = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' },
		body: JSON.stringify([
			{ jsonrpc: '2.0', id: 1, method: 'ping' },
			{ jsonrpc: '2.0', method: 'notifications/initialized' }
		])
	}).then((x) => x.json());
	check('HTTP batch', Array.isArray(batch) && batch.length === 1);
	const sse = await fetch(url, { headers: { Accept: 'text/event-stream' } });
	check('HTTP GET with SSE accept -> 405', sse.status === 405);
	const page = await fetch(url, { headers: { Accept: 'text/html' } });
	check(
		'HTTP GET from a browser -> short note',
		page.status === 200 && /MCP server/.test(await page.text())
	);
	const opt = await fetch(url, {
		method: 'OPTIONS',
		headers: { Origin: 'https://example.com', 'Access-Control-Request-Method': 'POST' }
	});
	check(
		'CORS preflight',
		opt.status === 204 && opt.headers.get('access-control-allow-origin') === '*'
	);
	const parse = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: '{oops'
	});
	check('bad JSON -> 400 parse error', parse.status === 400);
}

console.log(`\n${passed} passed, ${failed} failed${url ? ` (${url})` : ' (direct)'}`);
process.exit(failed ? 1 : 0);
