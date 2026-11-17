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
  <path d="M15 7L12 12"/>
  <path d="M13 12C13 11.445 12.555 11 12 11C11.445 11 11 11.445 11 12C11 12.555 11.445 13 12 13C12.555 13 13 12.555 13 12Z"/>
  <path d="M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12"/>
  <path d="M10.934 6.105C8.129 6.609 6 9.051 6 12"/>
  <path d="M18 12C18 11.434 17.914 10.891 17.77 10.367"/>
  <path d="M18 17L18 21"/>
  <path d="M22 17L22 21"/>
  <path d="M10 21L14 21L14 17L10 17Z"/>
  <path d="M2 21L6 21L6 17L2 17Z"/>
</svg>
