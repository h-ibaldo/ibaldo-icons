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
  <path d="M17 12C14.789 12 13 10.211 13 8C13 5.789 14.789 4 17 4C19.211 4 21 5.789 21 8C21 10.211 19.211 12 17 12Z"/>
  <path d="M17 2L17 4"/>
  <path d="M17 12L17 14"/>
  <path d="M22.195 5L20.465 6"/>
  <path d="M13.535 10L11.805 11"/>
  <path d="M22.195 11L20.465 10"/>
  <path d="M13.535 6L11.805 5"/>
  <path d="M8 4.078C4.609 4.566 2 7.477 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C16.965 18 18.73 17.18 20 15.879"/>
</svg>
