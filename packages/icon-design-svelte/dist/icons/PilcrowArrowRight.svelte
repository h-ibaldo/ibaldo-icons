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
  <path d="M10 14L10 2L8.5 2C6.566 2 5 3.566 5 5.5C5 7.434 6.566 9 8.5 9L10 9"/>
  <path d="M14 2L14 14.102"/>
  <path d="M2 18L22 18"/>
  <path d="M18 22L22 18L18 14"/>
</svg>
