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
  <path d="M4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12Z"/>
  <path d="M12 8L12 12L15 12"/>
  <path d="M19.93 13L22 13L22 11L19.93 11"/>
  <path d="M6 3L6 6.723"/>
  <path d="M18 6.719L18 3"/>
  <path d="M18 21L18 17.277"/>
  <path d="M6 17.281L6 21"/>
</svg>
