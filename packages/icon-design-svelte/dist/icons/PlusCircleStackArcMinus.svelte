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
  <path d="M10 6C10 8.211 8.211 10 6 10C3.789 10 2 8.211 2 6C2 3.789 3.789 2 6 2C8.211 2 10 3.789 10 6Z"/>
  <path d="M12 10L12 14"/>
  <path d="M10 12L14 12"/>
  <path d="M5 6L7 6"/>
  <path d="M2.012 11.75C2.008 11.832 2 11.914 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C11.914 2 11.832 2.008 11.75 2.012"/>
  <path d="M6.09 12.996C6.563 15.836 9.027 18 12 18C15.313 18 18 15.313 18 12C18 9.027 15.836 6.566 12.996 6.09"/>
</svg>
