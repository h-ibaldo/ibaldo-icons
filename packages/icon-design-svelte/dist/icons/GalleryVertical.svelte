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
  <path d="M2 2L22 2"/>
  <path d="M2 22L22 22"/>
  <path d="M20 17L4 17C2.895 17 2 16.105 2 15L2 9C2 7.895 2.895 7 4 7L20 7C21.105 7 22 7.895 22 9L22 15C22 16.105 21.105 17 20 17Z"/>
</svg>
