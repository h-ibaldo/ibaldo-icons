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
  <path d="M2 2L2 22"/>
  <path d="M22 2L22 22"/>
  <path d="M10 6L14 6C14.551 6 15 6.449 15 7L15 17C15 17.551 14.551 18 14 18L10 18C9.449 18 9 17.551 9 17L9 7C9 6.449 9.449 6 10 6Z"/>
</svg>
