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
  <path d="M2 22L2 12C2 10.344 3.344 9 5 9L8 9C9.656 9 11 10.344 11 12L11 22"/>
  <path d="M5 9L5 6L8 6L8 9"/>
  <path d="M2 13L11 13"/>
  <path d="M13 7L22 7"/>
  <path d="M15 10L22 12"/>
  <path d="M15 4L22 2"/>
</svg>
