<script>
    import { enhance } from '$app/forms';
    let generating = false;
    let result = null;
    let error = null;

    function downloadSvg() {
        if (!result?.svgCode) return;
        
        const blob = new Blob([result.svgCode], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'icon.svg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">AI Icon Generator</h1>
    <p class="text-gray-600 mb-8">
        Describe the icon you want to create, and our AI will generate it in the style of icon.design.
        The generated icon will be a clean, minimalist SVG that matches our design system.
    </p>

    <form
        method="POST"
        use:enhance={() => {
            generating = true;
            error = null;
            return async ({ result: formResult, update }) => {
                generating = false;
                await update();
                if (formResult.type === 'success') {
                    result = formResult.data;
                } else if (formResult.type === 'error') {
                    error = formResult.error;
                }
            };
        }}
        class="max-w-2xl"
    >
        <div class="mb-6">
            <label for="prompt" class="block text-sm font-medium text-gray-700 mb-2">
                Describe your icon
            </label>
            <textarea
                id="prompt"
                name="prompt"
                rows="4"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Example: A minimalist cloud icon with a lightning bolt, in a flat design style"
                required
            ></textarea>
        </div>

        <button
            type="submit"
            class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            disabled={generating}
        >
            {#if generating}
                Generating...
            {:else}
                Generate Icon
            {/if}
        </button>
    </form>

    {#if error}
        <div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p class="text-red-600 font-medium">{error.message || error}</p>
            {#if error.details}
                <pre class="mt-2 text-xs text-red-500 whitespace-pre-wrap">{error.details}</pre>
            {/if}
        </div>
    {/if}

    {#if result?.svgCode}
        <div class="mt-8">
            <h2 class="text-xl font-semibold mb-4">Generated Icon</h2>
            <div class="border border-gray-200 rounded-md p-4 inline-block">
                <div class="w-32 h-32 flex items-center justify-center">
                    {@html result.svgCode}
                </div>
            </div>
            <div class="mt-4 space-y-4">
                <button
                    on:click={downloadSvg}
                    class="text-blue-600 hover:text-blue-700 font-medium"
                >
                    Download SVG
                </button>
                <div class="bg-gray-50 p-4 rounded-md">
                    <h3 class="text-sm font-medium text-gray-700 mb-2">SVG Code</h3>
                    <pre class="text-xs overflow-x-auto p-2 bg-white border border-gray-200 rounded">{result.svgCode}</pre>
                </div>
            </div>
        </div>
    {/if}
</div> 