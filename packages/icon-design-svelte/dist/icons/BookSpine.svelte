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
  <path d="M20 17L20 22"/>
  <path d="M3 19.5L3 4.5C3 3.117 4.117 2 5.5 2L20 2C20.551 2 21 2.449 21 3L21 16C21 16.551 20.551 17 20 17L5.5 17C4.117 17 3 18.117 3 19.5C3 20.883 4.117 22 5.5 22L21 22"/>
  <path d="M8 2L8 17"/>
</svg>
