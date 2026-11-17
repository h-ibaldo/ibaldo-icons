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
  <path d="M10 4L21 4"/>
  <path d="M10 12L21 12"/>
  <path d="M10 20L21 20"/>
  <path d="M5 4C5 4.551 4.551 5 4 5C3.449 5 3 4.551 3 4C3 3.449 3.449 3 4 3C4.551 3 5 3.449 5 4Z"/>
  <path d="M5 12C5 12.551 4.551 13 4 13C3.449 13 3 12.551 3 12C3 11.449 3.449 11 4 11C4.551 11 5 11.449 5 12Z"/>
  <path d="M5 20C5 20.551 4.551 21 4 21C3.449 21 3 20.551 3 20C3 19.449 3.449 19 4 19C4.551 19 5 19.449 5 20Z"/>
</svg>
