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
  <path d="M22 22L22 2"/>
  <path d="M7 16L3 16C2.449 16 2 15.551 2 15L2 9C2 8.449 2.449 8 3 8L7 8C7.551 8 8 8.449 8 9L8 15C8 15.551 7.551 16 7 16Z"/>
  <path d="M17 18L13 18C12.449 18 12 17.551 12 17L12 7C12 6.449 12.449 6 13 6L17 6C17.551 6 18 6.449 18 7L18 17C18 17.551 17.551 18 17 18Z"/>
</svg>
