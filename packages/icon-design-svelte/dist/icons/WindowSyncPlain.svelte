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
  <path d="M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"/>
  <path d="M2 8L22 8"/>
  <path d="M16 15L17 13"/>
  <path d="M7 17L8 15"/>
  <path d="M8 15C8 17.211 9.789 19 12 19C13.008 19 13.918 18.613 14.621 18"/>
  <path d="M16 15C16 12.789 14.211 11 12 11C10.992 11 10.082 11.387 9.379 12"/>
</svg>
