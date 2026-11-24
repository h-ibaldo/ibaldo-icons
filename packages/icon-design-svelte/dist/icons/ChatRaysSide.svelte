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
  <path d="M7 17L20 17C21.105 17 22 16.105 22 15L22 9C22 7.895 21.105 7 20 7L7 7C5.895 7 5 7.895 5 9L5 10L2 12L5 14L5 15C5 16.105 5.895 17 7 17Z"/>
  <path d="M13 2L13 4"/>
  <path d="M5 2L7 4"/>
  <path d="M21 2L19 4"/>
  <path d="M13 22L13 20"/>
  <path d="M21 22L19 20"/>
  <path d="M5 22L7 20"/>
</svg>
