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
  <path d="M4 5L20 5C21.105 5 22 5.895 22 7L22 17C22 18.105 21.105 19 20 19L4 19C2.895 19 2 18.105 2 17L2 7C2 5.895 2.895 5 4 5Z"/>
  <path d="M5 9L8 9L8 11L5 11Z"/>
  <path d="M5 15L8 15"/>
  <path d="M11 15L13 15"/>
  <path d="M17 15L19 15"/>
</svg>
