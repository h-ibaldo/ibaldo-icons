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
  <path d="M7 6L7 2"/>
  <path d="M7 22L7 18"/>
  <path d="M5 6L9 6C9.551 6 10 6.449 10 7L10 17C10 17.551 9.551 18 9 18L5 18C4.449 18 4 17.551 4 17L4 7C4 6.449 4.449 6 5 6Z"/>
  <path d="M17 8L17 4"/>
  <path d="M17 20L17 16"/>
  <path d="M15 8L19 8C19.551 8 20 8.449 20 9L20 15C20 15.551 19.551 16 19 16L15 16C14.449 16 14 15.551 14 15L14 9C14 8.449 14.449 8 15 8Z"/>
</svg>
