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
  <path d="M13 2L13 4"/>
  <path d="M5 2L7 4"/>
  <path d="M21 2L19 4"/>
  <path d="M13 22L13 20"/>
  <path d="M21 22L19 20"/>
  <path d="M5 22L7 20"/>
  <path d="M20 16C21.105 16 22 15.105 22 14L22 10C22 8.895 21.105 8 20 8L7 8C5.895 8 5 8.895 5 10L5 12L2 16Z"/>
</svg>
