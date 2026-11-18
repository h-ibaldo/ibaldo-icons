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
  <path d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"/>
  <path d="M14.895 10.551L12 12L9.105 10.551C8.426 10.215 8 9.523 8 8.766L8 7L16 7L16 8.766C16 9.523 15.574 10.215 14.895 10.551Z"/>
  <path d="M9.105 13.449L12 12L14.895 13.449C15.574 13.785 16 14.477 16 15.234L16 17L8 17L8 15.234C8 14.477 8.426 13.785 9.105 13.449Z"/>
</svg>
