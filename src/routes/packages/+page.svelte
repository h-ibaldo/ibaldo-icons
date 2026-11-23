<div class="pb-4 pt-12 px-4 sm:px-14 w-full max-w-4xl mx-auto leading-[1.8] text-2xl font-book">

    <h1 class="text-2xl font-semibold mb-4">Packages</h1>

    <p class="mb-4">Ibaldo Icons is available as framework components for React, Svelte, Vue and React Native.</p>
    <p class="mb-4">Each package ships the full icon set as individual components — tree-shakeable, typed, and ready to use.</p>

    <h2 class="font-semibold mb-2 mt-8">React</h2>

    <p class="mb-4">
        <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">@ibaldo/icons-react</code>
    </p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>npm install @ibaldo/icons-react</code></pre>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>import &#123; Play, ChatCheck, Volume &#125; from '@ibaldo/icons-react';

function App() &#123;
  return (
    &lt;div&gt;
      &lt;Play /&gt;
      &lt;ChatCheck size=&#123;32&#125; /&gt;
      &lt;Volume color="#333" strokeWidth=&#123;2&#125; /&gt;
    &lt;/div&gt;
  );
&#125;</code></pre>

    <h2 class="font-semibold mb-2 mt-8">Svelte</h2>

    <p class="mb-4">
        <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">@ibaldo/icons-svelte</code>
    </p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>npm install @ibaldo/icons-svelte</code></pre>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>&lt;script&gt;
  import &#123; Play, ChatCheck, Volume &#125; from '@ibaldo/icons-svelte';
&lt;/script&gt;

&lt;Play /&gt;
&lt;ChatCheck size=&#123;32&#125; /&gt;
&lt;Volume color="#333" strokeWidth=&#123;2&#125; /&gt;</code></pre>

    <h2 class="font-semibold mb-2 mt-8">Vue</h2>

    <p class="mb-4">
        <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">@ibaldo/icons-vue</code>
    </p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>npm install @ibaldo/icons-vue</code></pre>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>&lt;script setup&gt;
import &#123; Play, ChatCheck, Volume &#125; from '@ibaldo/icons-vue';
&lt;/script&gt;

&lt;template&gt;
  &lt;Play /&gt;
  &lt;ChatCheck :size="32" /&gt;
  &lt;Volume color="#333" :stroke-width="2" /&gt;
&lt;/template&gt;</code></pre>

    <h2 class="font-semibold mb-2 mt-8">React Native</h2>

    <p class="mb-4">
        <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">@ibaldo/icons-react-native</code>
    </p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>npm install @ibaldo/icons-react-native react-native-svg</code></pre>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>import &#123; Play, ChatCheck, Volume &#125; from '@ibaldo/icons-react-native';

export default function App() &#123;
  return (
    &lt;&gt;
      &lt;Play /&gt;
      &lt;ChatCheck size=&#123;32&#125; /&gt;
      &lt;Volume color="#333" strokeWidth=&#123;2&#125; /&gt;
    &lt;/&gt;
  );
&#125;</code></pre>

    <p class="mb-4">Works with Expo and bare React Native. Requires <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">react-native-svg</code>.</p>

    <h2 class="font-semibold mb-2 mt-8">Props</h2>

    <p class="mb-4">All icons accept the same props in every package (in Vue templates, <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">strokeWidth</code> can be written <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">stroke-width</code>).</p>

    <div class="overflow-x-auto mb-4">
        <table class="text-base w-full border-collapse">
            <thead>
                <tr class="border-b border-gray-200">
                    <th class="text-left py-2 pr-6 font-semibold">Prop</th>
                    <th class="text-left py-2 pr-6 font-semibold">Type</th>
                    <th class="text-left py-2 pr-6 font-semibold">Default</th>
                    <th class="text-left py-2 font-semibold">Description</th>
                </tr>
            </thead>
            <tbody class="text-gray-700">
                <tr class="border-b border-gray-100">
                    <td class="py-2 pr-6"><code>size</code></td>
                    <td class="py-2 pr-6">number | string</td>
                    <td class="py-2 pr-6">24</td>
                    <td class="py-2">Width and height</td>
                </tr>
                <tr class="border-b border-gray-100">
                    <td class="py-2 pr-6"><code>color</code></td>
                    <td class="py-2 pr-6">string</td>
                    <td class="py-2 pr-6">currentColor</td>
                    <td class="py-2">Stroke color</td>
                </tr>
                <tr class="border-b border-gray-100">
                    <td class="py-2 pr-6"><code>strokeWidth</code></td>
                    <td class="py-2 pr-6">number | string</td>
                    <td class="py-2 pr-6">1.5</td>
                    <td class="py-2">Stroke width</td>
                </tr>
            </tbody>
        </table>
    </div>

    <p class="mb-4">Additional props are forwarded to the underlying <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">&lt;svg&gt;</code> element.</p>

    <h2 class="font-semibold mb-2 mt-8">Tree-shaking</h2>

    <p class="mb-4">Import only what you use.</p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>// Named import — bundle includes only this icon
import &#123; Play &#125; from '@ibaldo/icons-react';

// Path import — explicit, same result
import Play from '@ibaldo/icons-react/icons/Play';</code></pre>

    <p class="mb-4">Both approaches are tree-shakeable. Named imports are preferred.</p>

    <h2 id="mcp" class="font-semibold mb-2 mt-8">AI agents (MCP)</h2>

    <p class="mb-4">Ibaldo Icons has a hosted MCP server, so AI agents like Claude and Cursor can search the library and get the exact icon instead of guessing names. Nothing to install, no key. It is read-only.</p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>https://icons.ibald.ooo/mcp</code></pre>

    <p class="mb-4">Claude Code:</p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>claude mcp add --transport http ibaldo-icons https://icons.ibald.ooo/mcp</code></pre>

    <p class="mb-4">Claude.ai and Claude Desktop: Settings → Connectors → Add custom connector, then paste the URL.</p>

    <p class="mb-4">Cursor: add it to <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">.cursor/mcp.json</code>.</p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>&#123;
  "mcpServers": &#123;
    "ibaldo-icons": &#123; "url": "https://icons.ibald.ooo/mcp" &#125;
  &#125;
&#125;</code></pre>

    <p class="mb-4">Tools: <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">search_icons</code> finds icons from plain words, <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">get_icon</code> returns the SVG or the import code for each package, <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">list_variants</code> lists every version of one icon family (all bells, for example), and <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">list_categories</code> lists the categories. Old icon names still work and point to the current name.</p>

    <p class="mb-4">Try asking: “Add a notification bell with a clock to the header, using Ibaldo Icons.”</p>

    <h2 class="font-semibold mb-2 mt-8">NPM</h2>

    <p class="mb-4">
        <a class="hover:text-indigo-500 underline" href="https://www.npmjs.com/package/@ibaldo/icons-react" target="_blank">@ibaldo/icons-react</a> ·
        <a class="hover:text-indigo-500 underline" href="https://www.npmjs.com/package/@ibaldo/icons-svelte" target="_blank">@ibaldo/icons-svelte</a> ·
        <a class="hover:text-indigo-500 underline" href="https://www.npmjs.com/package/@ibaldo/icons-vue" target="_blank">@ibaldo/icons-vue</a> ·
        <a class="hover:text-indigo-500 underline" href="https://www.npmjs.com/package/@ibaldo/icons-react-native" target="_blank">@ibaldo/icons-react-native</a>
    </p>

</div>

<style>
    code {
        font-family: 'Geist Mono', 'Fira Code', monospace;
    }
    pre code {
        background: none;
        padding: 0;
        border-radius: 0;
    }
</style>
