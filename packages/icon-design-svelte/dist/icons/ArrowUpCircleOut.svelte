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
  <path d="M9 6L12 3L15 6"/>
  <path d="M12 15L12 3"/>
  <path d="M18 3.02C20.426 4.844 22 7.73 22 11C22 16.523 17.523 21 12 21C6.477 21 2 16.523 2 11C2 7.73 3.574 4.844 6 3.02"/>
</svg>
