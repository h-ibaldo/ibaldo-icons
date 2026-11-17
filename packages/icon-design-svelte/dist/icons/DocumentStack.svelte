<script>
  /** @type {string} */
  export let color = 'currentColor';
  /** @type {number|string} */
  export let size = 24;
  /** @type {number|string} */
  export let strokeWidth = 1.5;
  /** @type {string} */
  let className = '';
  export { className as class };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon-design {className}"
  {...$$restProps}
>
  <rect x="7.025268548599342" y="5.998779303362426" width="15" height="16" rx="1" ry="1"/>
  <path d="M16.025268548599342,5.998779303362426v-3c0-.552284749829596-.447715250169495-1-1-1H3.025268548599342c-.552284749830505,0-1,.447715250170404-1,1v14c0,.552284749831415.447715250169495,1,1,1h4"/>
  <line x1="11.025268548599342" y1="9.998779303362426" x2="18.025268548599342" y2="9.998779303362426"/>
  <line x1="11.025268548599342" y1="13.998779303362426" x2="18.025268548599342" y2="13.998779303362426"/>
  <line x1="11.025268548599342" y1="17.998779303362426" x2="18.025268548599342" y2="17.998779303362426"/>
</svg>
