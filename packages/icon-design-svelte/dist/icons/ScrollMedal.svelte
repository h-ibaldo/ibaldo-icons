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
  <path d="M9 5.5C9 7.434 7.434 9 5.5 9C3.566 9 2 7.434 2 5.5C2 3.566 3.566 2 5.5 2C7.434 2 9 3.566 9 5.5Z"/>
  <path d="M22 7L22 4.5C22 3.117 20.883 2 19.5 2C18.117 2 17 3.117 17 4.5L17 19.5C17 20.883 15.883 22 14.5 22C13.117 22 12 20.883 12 19.5L12 18"/>
  <path d="M12 2L19.5 2"/>
  <path d="M14.5 22L4.5 22C3.117 22 2 20.883 2 19.5L2 18"/>
  <path d="M22 7L17 7"/>
  <path d="M12 18L2 18"/>
  <path d="M3 7.945L3 14L5.5 13L8 14L8 7.945"/>
</svg>
