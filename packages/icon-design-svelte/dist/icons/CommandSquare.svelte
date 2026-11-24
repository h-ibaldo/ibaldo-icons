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
  <path d="M10 16L10 8C10 6.895 9.105 6 8 6C6.895 6 6 6.895 6 8C6 9.105 6.895 10 8 10L16 10C17.105 10 18 9.105 18 8C18 6.895 17.105 6 16 6C14.895 6 14 6.895 14 8L14 16C14 17.105 14.895 18 16 18C17.105 18 18 17.105 18 16C18 14.895 17.105 14 16 14L8 14C6.895 14 6 14.895 6 16C6 17.105 6.895 18 8 18C9.105 18 10 17.105 10 16Z"/>
  <path d="M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"/>
</svg>
