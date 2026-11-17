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
  <path d="M8.5 2L8.5 22"/>
  <path d="M2 18L15 6"/>
  <path d="M2 6L15 18"/>
  <path d="M8.5 2L15 6"/>
  <path d="M15 18L8.5 22"/>
  <path d="M17.219 14.316C17.711 13.492 18 12.531 18 11.5C18 10.734 17.844 10.004 17.559 9.34"/>
  <path d="M20.094 17.191C21.285 15.605 22 13.641 22 11.5C22 9.617 21.445 7.871 20.504 6.395"/>
</svg>
