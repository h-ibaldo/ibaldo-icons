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
  <path d="M6 6.961C6 5.156 6.477 3.465 7.309 2L21 15.688C19.535 16.523 17.844 17 16.035 17C10.492 17 6 12.508 6 6.961Z"/>
  <path d="M11 5L20 3L18 12"/>
  <path d="M15 8L20 3"/>
  <path d="M19 3C19 2.449 19.449 2 20 2C20.551 2 21 2.449 21 3C21 3.551 20.551 4 20 4C19.449 4 19 3.551 19 3Z"/>
  <path d="M16 22L3 22"/>
  <path d="M8 22L8 13"/>
  <path d="M11 22L11 16"/>
</svg>
