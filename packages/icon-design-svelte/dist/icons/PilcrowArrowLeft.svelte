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
  <path d="M12 14L12 2L10.5 2C8.566 2 7 3.566 7 5.5C7 7.434 8.566 9 10.5 9L12 9"/>
  <path d="M16 2L16 14.102"/>
  <path d="M22 18L2 18"/>
  <path d="M6 14L2 18L6 22"/>
</svg>
