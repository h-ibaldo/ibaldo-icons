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
  <path d="M21.082 12.254C21.215 12.051 21.34 11.848 21.441 11.652C22.395 9.75 22.113 7.461 20.727 5.848C18.723 3.508 15.152 3.371 12.977 5.547L12.012 6.512L12.012 6.539L11.988 6.512L11.023 5.547C8.848 3.371 5.277 3.508 3.273 5.848C1.887 7.461 1.605 9.75 2.559 11.652C4.512 15.414 11.988 20.512 11.988 20.512L12 20.492"/>
  <path d="M15 18L17 20L21 16"/>
</svg>
