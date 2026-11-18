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
  <path d="M12 12C12 14.762 9.762 17 7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7C9.762 7 12 9.238 12 12Z"/>
  <path d="M5.25 12L6.418 13.168L8.75 10.832"/>
  <path d="M16 12L21 12"/>
</svg>
