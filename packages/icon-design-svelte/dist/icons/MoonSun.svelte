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
  <path d="M2 12.117C2 8.063 4.414 4.57 7.883 3C7.316 4.254 7 5.648 7 7.117C7 12.641 11.477 17.117 17 17.117C18.469 17.117 19.859 16.801 21.117 16.234C19.547 19.703 16.055 22.117 12 22.117C6.477 22.117 2 17.641 2 12.117Z"/>
  <path d="M9.352 7.758C10.121 7.277 11.027 7 12 7C14.762 7 17 9.238 17 12C17 13.004 16.703 13.938 16.199 14.719"/>
  <path d="M18 6L20 4"/>
  <path d="M14 4L14 2"/>
  <path d="M20 10L22 10"/>
</svg>
