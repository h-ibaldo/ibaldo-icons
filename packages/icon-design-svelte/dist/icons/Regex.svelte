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
  <path d="M5 16L6 16C7.105 16 8 16.895 8 18L8 19C8 20.105 7.105 21 6 21L5 21C3.895 21 3 20.105 3 19L3 18C3 16.895 3.895 16 5 16Z"/>
  <path d="M13 7.902L22 7.902"/>
  <path d="M15.25 12L19.75 3.805"/>
  <path d="M19.75 12L15.25 3.805"/>
</svg>
