<div class="pb-4 pt-12 px-4 sm:px-14 w-full max-w-4xl mx-auto leading-[1.8] text-2xl">

    <h1 class="text-2xl font-medium mb-4">Packages</h1>

    <p class="mb-4">icon.design is available as framework components for React and Svelte.</p>
    <p class="mb-4">Each package ships the full icon set as individual components — tree-shakeable, typed, and ready to use.</p>

    <h2 class="font-medium mb-2 mt-8">React</h2>

    <p class="mb-4">
        <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">@ibaldo/icon-design-react</code>
    </p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>npm install @ibaldo/icon-design-react</code></pre>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>import &#123; UserHead1, AddPlus1, Settings &#125; from '@ibaldo/icon-design-react';

function App() &#123;
  return (
    &lt;div&gt;
      &lt;UserHead1 /&gt;
      &lt;AddPlus1 size=&#123;32&#125; /&gt;
      &lt;Settings color="#333" strokeWidth=&#123;2&#125; /&gt;
    &lt;/div&gt;
  );
&#125;</code></pre>

    <h2 class="font-medium mb-2 mt-8">Svelte</h2>

    <p class="mb-4">
        <code class="text-lg bg-gray-100 px-1.5 py-0.5 rounded">@ibaldo/icon-design-svelte</code>
    </p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>npm install @ibaldo/icon-design-svelte</code></pre>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>&lt;script&gt;
  import &#123; UserHead1, AddPlus1, Settings &#125; from '@ibaldo/icon-design-svelte';
&lt;/script&gt;

&lt;UserHead1 /&gt;
&lt;AddPlus1 size=&#123;32&#125; /&gt;
&lt;Settings color="#333" strokeWidth=&#123;2&#125; /&gt;</code></pre>

    <h2 class="font-medium mb-2 mt-8">Props</h2>

    <p class="mb-4">All icons accept the same props across both packages.</p>

    <div class="overflow-x-auto mb-4">
        <table class="text-base w-full border-collapse">
            <thead>
                <tr class="border-b border-gray-200">
                    <th class="text-left py-2 pr-6 font-medium">Prop</th>
                    <th class="text-left py-2 pr-6 font-medium">Type</th>
                    <th class="text-left py-2 pr-6 font-medium">Default</th>
                    <th class="text-left py-2 font-medium">Description</th>
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

    <h2 class="font-medium mb-2 mt-8">Tree-shaking</h2>

    <p class="mb-4">Import only what you use.</p>

    <pre class="text-base bg-gray-100 p-4 overflow-x-auto mb-4 leading-relaxed"><code>// Named import — bundle includes only this icon
import &#123; PlayButton &#125; from '@ibaldo/icon-design-react';

// Path import — explicit, same result
import PlayButton from '@ibaldo/icon-design-react/icons/PlayButton';</code></pre>

    <p class="mb-4">Both approaches are tree-shakeable. Named imports are preferred.</p>

    <h2 class="font-medium mb-2 mt-8">NPM</h2>

    <p class="mb-4">
        <a class="hover:text-indigo-500 underline" href="https://www.npmjs.com/package/@ibaldo/icon-design-react" target="_blank">@ibaldo/icon-design-react</a> ·
        <a class="hover:text-indigo-500 underline" href="https://www.npmjs.com/package/@ibaldo/icon-design-svelte" target="_blank">@ibaldo/icon-design-svelte</a>
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
