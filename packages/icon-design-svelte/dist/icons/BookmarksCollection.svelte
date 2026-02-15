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
  <path d="M18,5H6c-.552284749830505,0-1,.447715250170404-1,1v16l7-4,7,4V6c0-.552284749829596-.447715250169495-1-1-1Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18,5v-2c0-.552284749829596-.447715250169495-1-1-1H7c-.552284749830505,0-1,.447715250170404-1,1v2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
