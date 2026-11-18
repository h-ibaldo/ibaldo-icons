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
  <path d="M20 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 20C22 21.105 21.105 22 20 22Z"/>
  <path d="M8 2L8 6"/>
  <path d="M16 2L16 6"/>
  <path d="M2 10L22 10"/>
  <path d="M8 17C7.449 17 7 16.551 7 16C7 15.449 7.449 15 8 15C8.551 15 9 15.449 9 16C9 16.551 8.551 17 8 17Z"/>
</svg>
