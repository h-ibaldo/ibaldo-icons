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
  <path d="M4 12C8.695 12 12.5 15.582 12.5 20"/>
  <path d="M21 12C16.305 12 12.5 15.582 12.5 20"/>
  <path d="M21 12C16.305 12 12.5 8.418 12.5 4"/>
  <path d="M4 12C8.695 12 12.5 8.418 12.5 4"/>
  <path d="M5.5 3L5.5 8"/>
  <path d="M8 5.5L3 5.5"/>
  <path d="M19.5 17L19.5 20"/>
  <path d="M21 18.5L18 18.5"/>
</svg>
