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
  <path d="M9 17L7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7L9 7"/>
  <path d="M19.121 9L20.535 10.414C22.488 12.367 22.488 15.531 20.535 17.484C18.582 19.438 15.418 19.438 13.465 17.484L12.051 16"/>
  <path d="M8 12L16 12"/>
</svg>
