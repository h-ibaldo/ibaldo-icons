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
  <path d="M22 7.5C22 10.535 19.539 13 16.5 13C13.461 13 11 10.535 11 7.5C11 4.465 13.461 2 16.5 2C19.539 2 22 4.465 22 7.5Z"/>
  <path d="M16.5 10L16.5 10"/>
  <path d="M16.5 7L16.5 5"/>
  <path d="M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18"/>
  <path d="M8 4L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L10 14"/>
</svg>
