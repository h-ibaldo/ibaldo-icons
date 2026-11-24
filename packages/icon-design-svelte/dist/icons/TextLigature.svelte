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
  <path d="M7 22L7 7C7 4.238 9.238 2 12 2L12.051 2C14.813 2 17.051 4.238 17.051 7"/>
  <path d="M17 22L17 12.039L14.047 12.039"/>
  <path d="M4 22L10 22"/>
  <path d="M4 12L10 12"/>
  <path d="M14 22L20 22"/>
</svg>
