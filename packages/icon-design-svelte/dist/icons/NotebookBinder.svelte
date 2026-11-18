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
  <path d="M6 12L6 10"/>
  <path d="M6 17L6 15"/>
  <path d="M6 7L6 4C6 3.449 6.449 3 7 3L19 3C19.551 3 20 3.449 20 4L20 20C20 20.551 19.551 21 19 21L7 21C6.449 21 6 20.551 6 20"/>
  <path d="M4 7L8 7"/>
  <path d="M4 12L8 12"/>
  <path d="M4 17L8 17"/>
</svg>
