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
  <path d="M21.5 12A9.5 9.5 0 1 1 2.5 12A9.5 9.5 0 1 1 21.5 12Z"/>
  <path d="M11 9A2 2 0 1 1 7 9A2 2 0 1 1 11 9Z"/>
  <path d="M16.5 14.5A1.5 1.5 0 1 1 13.5 14.5A1.5 1.5 0 1 1 16.5 14.5Z"/>
  <path d="M10.75 16A1.25 1.25 0 1 1 8.25 16A1.25 1.25 0 1 1 10.75 16Z"/>
</svg>
