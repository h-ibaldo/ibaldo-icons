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
  <path d="M19 17L19 4C19 2.895 18.105 2 17 2L8.984 2C8.355 2 7.75 2.25 7.305 2.695L3.695 6.305C3.25 6.75 3 7.355 3 7.984L3 20C3 21.105 3.895 22 5 22L7 22"/>
  <path d="M11 15L14.5 18.5L11 22"/>
  <path d="M16 22L21 22"/>
</svg>
