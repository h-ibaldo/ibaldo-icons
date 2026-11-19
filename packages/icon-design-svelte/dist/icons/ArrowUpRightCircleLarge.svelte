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
  <path d="M19.07 19.07C22.977 15.168 22.977 8.836 19.07 4.93C15.168 1.023 8.836 1.023 4.93 4.93C1.023 8.836 1.023 15.168 4.93 19.07C8.836 22.977 15.168 22.977 19.07 19.07Z"/>
  <path d="M16 15L16 8L9 8"/>
  <path d="M9 15L16 8"/>
</svg>
