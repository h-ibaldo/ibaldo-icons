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
  <path d="M2 12L22 12"/>
  <path d="M14 9L14 5C14 4.449 14.449 4 15 4L19 4C19.551 4 20 4.449 20 5L20 9"/>
  <path d="M20 15L20 19C20 19.551 19.551 20 19 20L15 20C14.449 20 14 19.551 14 19L14 15"/>
  <path d="M4 9L4 3C4 2.449 4.449 2 5 2L9 2C9.551 2 10 2.449 10 3L10 9"/>
  <path d="M10 15L10 21C10 21.551 9.551 22 9 22L5 22C4.449 22 4 21.551 4 21L4 15"/>
</svg>
