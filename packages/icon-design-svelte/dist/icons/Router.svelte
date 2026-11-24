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
  <path d="M2 15L22 15L22 21L2 21Z"/>
  <path d="M19 18L18 18"/>
  <path d="M15 18L14 18"/>
  <path d="M11 18L10 18"/>
  <path d="M3 5L12 15L21 5"/>
  <path d="M10.691 9.113C11.469 8.332 12.738 8.332 13.52 9.113"/>
  <path d="M8.898 7.113C10.668 5.344 13.539 5.344 15.309 7.113"/>
  <path d="M7 5.113C9.82 2.297 14.387 2.297 17.207 5.113"/>
</svg>
