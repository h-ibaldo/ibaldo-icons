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
  <path d="M3 22L3 11.5C3 10.117 4.117 9 5.5 9L8 9L8 22"/>
  <path d="M8 4.5C8 5.883 6.883 7 5.5 7C4.117 7 3 5.883 3 4.5C3 3.117 4.117 2 5.5 2C6.883 2 8 3.117 8 4.5Z"/>
  <path d="M3 17L8 17"/>
  <path d="M21 22L21 11.5C21 10.117 19.883 9 18.5 9L16 9L16 22"/>
  <path d="M16 4.5C16 5.883 17.117 7 18.5 7C19.883 7 21 5.883 21 4.5C21 3.117 19.883 2 18.5 2C17.117 2 16 3.117 16 4.5Z"/>
  <path d="M21 17L16 17"/>
  <path d="M8 9L12 14L16 9"/>
</svg>
