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
  <path d="M13 8L16 11L13 14"/>
  <path d="M9 8L6 11L9 14"/>
  <path d="M20 11C20 15.973 15.973 20 11 20C6.027 20 2 15.973 2 11C2 6.027 6.027 2 11 2C15.973 2 20 6.027 20 11Z"/>
  <path d="M17.363 17.363L22 22"/>
</svg>
