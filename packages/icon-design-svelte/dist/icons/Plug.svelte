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
  <path d="M6 8L18 8L18 12C18 14.762 15.762 17 13 17L11 17C8.238 17 6 14.762 6 12Z"/>
  <path d="M12 17L12 21"/>
  <path d="M15 3L15 8"/>
  <path d="M9 3L9 8"/>
</svg>
