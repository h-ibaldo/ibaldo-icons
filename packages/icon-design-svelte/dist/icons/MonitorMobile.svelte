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
  <path d="M14 16L2 16L2 3L22 3L22 9"/>
  <path d="M12 20L12 16"/>
  <path d="M14 20L6 20"/>
  <path d="M18 12L21 12C21.551 12 22 12.449 22 13L22 20C22 20.551 21.551 21 21 21L18 21C17.449 21 17 20.551 17 20L17 13C17 12.449 17.449 12 18 12Z"/>
</svg>
