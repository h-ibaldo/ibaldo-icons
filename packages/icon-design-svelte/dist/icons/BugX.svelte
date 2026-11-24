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
  <path d="M6 15C6 11.133 8.688 8 12 8C15.313 8 18 11.133 18 15C18 18.867 15.313 22 12 22C8.688 22 6 18.867 6 15Z"/>
  <path d="M8.133 9.648C8.047 9.281 8 8.898 8 8.5C8 6.016 9.789 4 12 4C14.211 4 16 6.016 16 8.5C16 8.898 15.953 9.281 15.867 9.648"/>
  <path d="M15 5L18 2"/>
  <path d="M9 5L6 2"/>
  <path d="M18 12L21 11L21 8"/>
  <path d="M18 18L21 19L21 22"/>
  <path d="M18 15L22 15"/>
  <path d="M6 12L3 11L3 8"/>
  <path d="M6 18L3 19L3 22"/>
  <path d="M6 15L2 15"/>
  <path d="M14.852 12L9.148 17.699"/>
  <path d="M14.852 17.699L9.148 12"/>
</svg>
