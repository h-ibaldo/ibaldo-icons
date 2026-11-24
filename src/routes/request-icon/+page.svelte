<script>
    // Requests are public posts on X: they spread the library, and likes
    // decide what gets drawn first.
    const HANDLE = 'ibaldo';
    const HASHTAG = 'ibaldoicons';
    const SITE = 'https://icons.ibald.ooo';

    let concept = '';

    $: text = concept.trim()
        ? `@${HANDLE} I need a "${concept.trim()}" icon in Ibaldo Icons 🙏\n\nLike this post if you want it too.\n\n#${HASHTAG} ${SITE}`
        : '';
    $: postUrl = `https://x.com/intent/post?text=${encodeURIComponent(text)}`;
    $: votesUrl = `https://x.com/search?q=${encodeURIComponent('#' + HASHTAG)}&f=top`;
</script>

<div class="pb-4 pt-12 px-4 sm:px-14 w-full max-w-4xl mx-auto leading-[1.8] text-2xl font-book">

    <h1 class="text-2xl font-semibold mb-4">Request icon</h1>

    <p class="mb-8">
        Missing an icon? Ask for it in public.<br>
        Requests are posts on X.
    </p>

    <h2 class="mb-2 font-semibold">How it works</h2>

    <ol class="list-decimal list-inside mb-8">
        <li>Follow <a class="hover:text-indigo-500 underline" href="https://x.com/{HANDLE}" target="_blank" rel="noopener">@{HANDLE}</a> on X</li>
        <li>Post your request with <span class="font-semibold">#{HASHTAG}</span> (the button below writes it for you)</li>
        <li>When it ships, you get a reply with the icon</li>
    </ol>

    <form class="request-form mb-8" on:submit|preventDefault={() => window.open(postUrl, '_blank', 'noopener')}>
        <label for="concept" class="block text-sm mb-2">What icon do you need?</label>
        <div class="flex flex-wrap gap-2">
            <input
                id="concept"
                type="text"
                bind:value={concept}
                placeholder="e.g. rocket with a gear"
                maxlength="80"
                autocomplete="off"
                class="concept-input"
            />
            <button type="submit" class="post-button" disabled={!concept.trim()}>Post request on X</button>
        </div>
        {#if text}
            <pre class="preview">{text}</pre>
        {/if}
    </form>

    <!-- Hidden for now: link to the most-liked requests on X
    <p class="mb-8">
        <a class="hover:text-indigo-500 underline" href={votesUrl} target="_blank" rel="noopener">See the top requests</a>
        and like the ones you want too.
    </p>
    -->

    <h2 class="mb-2 font-semibold">Notes</h2>

    <p>One icon per post. Image references in the post are welcome.</p>
    <p>Requests are curated: icons have to fit the system.</p>
</div>

<style>
    .concept-input {
        flex: 1;
        min-width: 220px;
        height: 48px;
        padding: 0 0.75rem;
        font-size: 16px;
        border: 1px solid rgb(203 213 225);
        border-radius: var(--r-sm);
        background: transparent;
        box-shadow: none;
    }
    .concept-input:focus { border-color: #0900FF; box-shadow: none; outline: none; }
    .post-button {
        border-radius: var(--r-sm);
        height: 48px;
        padding: 0 1.25rem;
        font-size: 16px;
        color: white;
        background: #0900FF;
        border: none;
        cursor: pointer;
        transition: background-color 0.15s ease, opacity 0.15s ease;
    }
    .post-button:hover { background: #0700CC; }
    .post-button:disabled { opacity: 0.4; cursor: default; }
    .preview {
        margin-top: 0.75rem;
        padding: 0.75rem;
        font-family: inherit;
        font-size: 14px;
        line-height: 1.5;
        white-space: pre-wrap;
        background: rgb(241 245 249);
        color: rgb(51 65 85);
    }
    :global(html.dark) .concept-input { border-color: rgb(71 85 105); color: white; }
    :global(html.dark) .preview { background: rgb(30 41 59); color: rgb(203 213 225); }
</style>
