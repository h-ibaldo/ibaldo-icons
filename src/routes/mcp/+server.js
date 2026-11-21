// Hosted, read-only MCP server for Ibaldo Icons (Streamable HTTP, stateless).
// Add it to an agent with one URL: <site>/mcp. Logic lives in $lib/server/mcp/core.js.
import { createMcpServer } from '$lib/server/mcp/core.js';
// Bundled into the server function at build time, so nothing is fetched per request.
import indexRaw from '../../../static/icons-index.json?raw';

// One lazy module per SVG chunk: a get_icon call only loads the chunk it needs.
const chunkModules = import.meta.glob('/static/icons/chunks/*.json', {
	query: '?raw',
	import: 'default'
});
const chunkByFile = Object.fromEntries(
	Object.entries(chunkModules).map(([path, load]) => [path.split('/').pop(), load])
);
const chunkCache = new Map();

async function loadChunk(chunkPath) {
	const file = chunkPath.split('/').pop();
	if (!chunkCache.has(file)) {
		const load = chunkByFile[file];
		if (!load) return null;
		chunkCache.set(
			file,
			load().then((raw) => JSON.parse(raw))
		);
	}
	return chunkCache.get(file);
}

let server;
function getServer() {
	server ??= createMcpServer({ index: JSON.parse(indexRaw), loadChunk });
	return server;
}

const CORS = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
	'Access-Control-Allow-Headers':
		'Content-Type, Accept, Authorization, Mcp-Session-Id, Mcp-Protocol-Version, Last-Event-ID',
	'Access-Control-Expose-Headers': 'Mcp-Session-Id, Mcp-Protocol-Version',
	'Access-Control-Max-Age': '86400'
};

function reply(body, status = 200, extra = {}) {
	return new Response(body === null ? null : JSON.stringify(body), {
		status,
		headers: {
			...CORS,
			...(body === null ? {} : { 'Content-Type': 'application/json' }),
			'Cache-Control': 'no-store',
			...extra
		}
	});
}

export async function POST({ request }) {
	let payload;
	try {
		payload = await request.json();
	} catch {
		return reply(
			{ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } },
			400
		);
	}
	const mcp = getServer();
	if (Array.isArray(payload)) {
		if (!payload.length)
			return reply(
				{ jsonrpc: '2.0', id: null, error: { code: -32600, message: 'Invalid Request' } },
				400
			);
		const responses = (await Promise.all(payload.map((m) => mcp.handleMessage(m)))).filter(Boolean);
		return responses.length ? reply(responses) : reply(null, 202);
	}
	const response = await mcp.handleMessage(payload);
	return response ? reply(response) : reply(null, 202);
}

const NOTE = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Ibaldo Icons MCP</title>
<body style="font:18px/1.6 system-ui,sans-serif;max-width:40rem;margin:3rem auto;padding:0 1rem;color:#111">
<h1 style="font-size:1.4rem">Ibaldo Icons MCP server</h1>
<p>This URL is an MCP server for AI agents (Claude, Cursor and others). It lets them search the icons and get the exact SVG or import code.</p>
<p>Add this page's URL to your agent as a remote MCP server (Streamable HTTP). Nothing to install, no key needed.</p>
<pre style="background:#f3f4f6;padding:1rem;overflow-x:auto;font-size:15px">claude mcp add --transport http ibaldo-icons URL</pre>
<p>Tools: search_icons, get_icon, list_variants, list_categories. <a href="/packages#mcp">More on the packages page</a>.</p>
<script>document.querySelector('pre').textContent=document.querySelector('pre').textContent.replace('URL',location.href.split('?')[0])</script>
</body>`;

export function GET({ request }) {
	// MCP clients open GET for a server-to-client SSE stream; this server has none.
	if ((request.headers.get('accept') || '').includes('text/event-stream')) {
		return new Response('This MCP server is stateless and has no SSE stream. Use POST.', {
			status: 405,
			headers: { ...CORS, Allow: 'POST, OPTIONS' }
		});
	}
	return new Response(NOTE, {
		headers: {
			...CORS,
			'Content-Type': 'text/html; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}

export function DELETE() {
	return new Response(null, { status: 405, headers: { ...CORS, Allow: 'POST, OPTIONS' } });
}

export function OPTIONS() {
	return new Response(null, { status: 204, headers: CORS });
}
