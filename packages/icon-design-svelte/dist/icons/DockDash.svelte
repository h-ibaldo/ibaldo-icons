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
  <path d="M2 19L2 5C2 4.449 2.449 4 3 4L21 4C21.551 4 22 4.449 22 5L22 19C22 19.551 21.551 20 21 20L3 20C2.449 20 2 19.551 2 19Z"/>
  <path d="M15 16L9 16"/>
</svg>
