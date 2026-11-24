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
  <path d="M10.305 13.695L21.699 2.301"/>
  <path d="M16 14L11 14C10.449 14 10 13.551 10 13L10 8"/>
  <path d="M16 2L21 2C21.551 2 22 2.449 22 3L22 8"/>
  <path d="M22 12L22 21C22 21.551 21.551 22 21 22L3 22C2.449 22 2 21.551 2 21L2 3C2 2.449 2.449 2 3 2L12 2"/>
</svg>
