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
  <path d="M2 14.676C2 11.707 3.77 9.148 6.309 8C5.895 8.918 5.66 9.941 5.66 11.016C5.66 15.059 8.941 18.34 12.984 18.34C14.059 18.34 15.082 18.105 16 17.691C14.852 20.23 12.293 22 9.324 22C5.277 22 2 18.723 2 14.676Z"/>
  <path d="M9.352 7.758C10.121 7.277 11.027 7 12 7C14.762 7 17 9.238 17 12C17 13.004 16.703 13.938 16.199 14.719"/>
  <path d="M18 6L20 4"/>
  <path d="M14 4L14 2"/>
  <path d="M20 10L22 10"/>
</svg>
