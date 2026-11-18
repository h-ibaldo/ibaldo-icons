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
  <path d="M12 12L8 15"/>
  <path d="M12 18L16 15"/>
  <path d="M2.285 4.715L21.715 19.285"/>
  <path d="M4.777 6.582C4.285 7.621 4 8.777 4 10L4 14C4 18.418 7.582 22 12 22C15.195 22 17.941 20.125 19.223 17.418"/>
  <path d="M20 13.285L20 10C20 5.582 16.418 2 12 2C10.176 2 8.496 2.617 7.148 3.648"/>
  <path d="M15.215 9.59L16 9L12 6L12 7.18"/>
  <path d="M12 18L12 12"/>
</svg>
