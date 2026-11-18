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
  <path d="M12 14C10.344 14 9 12.656 9 11L9 6L15 6L15 11C15 12.656 13.656 14 12 14Z"/>
  <path d="M9 18L15 18"/>
  <path d="M12 14L12 18"/>
  <path d="M14.852 11.891L17.07 10.559C17.648 10.211 18 9.586 18 8.914C18 7.859 17.145 7 16.086 7L15 7"/>
  <path d="M9.148 11.891L6.93 10.559C6.352 10.211 6 9.586 6 8.914C6 7.859 6.855 7 7.914 7L9 7"/>
</svg>
