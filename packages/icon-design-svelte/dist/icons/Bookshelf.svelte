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
  <path d="M2 17L22 17"/>
  <path d="M5 20L5 17"/>
  <path d="M19 20L19 17"/>
  <path d="M4 17L4 7L8 7L8 17"/>
  <path d="M8 17L8 4L12 4L12 17"/>
  <path d="M16 17L16 5L20 5L20 17"/>
</svg>
