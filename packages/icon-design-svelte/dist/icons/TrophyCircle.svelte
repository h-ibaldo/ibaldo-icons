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
  <path d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"/>
  <path d="M12 15C10.344 15 9 13.656 9 12L9 7L15 7L15 12C15 13.656 13.656 15 12 15Z"/>
  <path d="M10 18L14 18"/>
  <path d="M12 15L12 18"/>
  <path d="M14.852 12.891L17.07 11.559C17.648 11.211 18 10.586 18 9.914C18 8.859 17.145 8 16.086 8L15 8"/>
  <path d="M9.148 12.891L6.93 11.559C6.352 11.211 6 10.586 6 9.914C6 8.859 6.855 8 7.914 8L9 8"/>
</svg>
