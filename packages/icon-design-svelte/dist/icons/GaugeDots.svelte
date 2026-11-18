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
  <path d="M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z"/>
  <path d="M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"/>
  <path d="M16.5 7.5L13.414 10.586"/>
  <path d="M12 6L12 6"/>
  <path d="M7.758 7.758L7.758 7.758"/>
  <path d="M16.242 16.242L16.242 16.242"/>
  <path d="M7.758 16.242L7.758 16.242"/>
  <path d="M6 12L6 12"/>
  <path d="M18 12L18 12"/>
</svg>
