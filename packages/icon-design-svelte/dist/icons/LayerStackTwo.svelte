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
  <path d="M10.973 2.617L3.43 7.141C2.781 7.531 2.781 8.469 3.43 8.859L10.973 13.383C11.605 13.762 12.395 13.762 13.027 13.383L20.57 8.859C21.219 8.469 21.219 7.531 20.57 7.141L13.027 2.617C12.395 2.238 11.605 2.238 10.973 2.617Z"/>
  <path d="M15.332 12L20.57 15.141C21.219 15.531 21.219 16.469 20.57 16.859L13.027 21.383C12.395 21.762 11.605 21.762 10.973 21.383L3.43 16.859C2.781 16.469 2.781 15.531 3.43 15.141L8.668 12"/>
</svg>
