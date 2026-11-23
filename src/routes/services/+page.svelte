<script>
    const EMAIL = 'hey@ibald.ooo';
    const mailto = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
</script>

<svelte:head>
    <title>Services · Ibaldo Icons</title>
</svelte:head>

<div class="pb-4 pt-12 px-4 sm:px-14 w-full max-w-4xl mx-auto leading-[1.8] text-2xl font-book">

    <h1 class="text-2xl font-semibold mb-4">Services</h1>

    <p class="mb-4">Ibaldo Icons is designed by Henrique Ibaldo.</p>
    <p class="mb-12">The same care is available for your product.</p>

    <h2 class="font-semibold mb-2">Icon design</h2>
    <p class="mb-4">Custom icon sets drawn for your brand and product, or new icons that extend Ibaldo Icons in the exact same style.</p>
    <p class="mb-12">Delivered as SVG, ready-to-use React, Svelte and Vue components, with names your team and AI agents can find.</p>

    <h2 class="font-semibold mb-2">UI/UX design</h2>
    <p class="mb-12">Interfaces for web and mobile products: flows, screens, design systems and prototypes, from first sketch to final handoff.</p>

    <h2 class="font-semibold mb-2">Frontend</h2>
    <p class="mb-12">The design, built. Production-ready interfaces for web and mobile, matched to the design down to the pixel, in the stack you already use.</p>

    <h2 class="font-semibold mb-2">Contact</h2>
    <p class="mb-4">Tell me about your project.</p>
    <p class="mb-8"><a class="hover:text-indigo-500 underline" href={mailto('Project inquiry')}>{EMAIL}</a></p>
</div>
