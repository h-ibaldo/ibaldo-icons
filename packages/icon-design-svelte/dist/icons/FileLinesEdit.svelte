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
  <path d="M21.707 8.879L20.121 7.293C19.731 6.902 19.098 6.902 18.707 7.293L11 15L11 18L14 18L21.707 10.293C22.098 9.902 22.098 9.269 21.707 8.879Z"/>
  <path d="M18 4L18 4C18 2.895 17.105 2 16 2L7.828 2C7.298 2 6.789 2.211 6.414 2.586L2.586 6.414C2.211 6.789 2 7.298 2 7.828L2 20C2 21.105 2.895 22 4 22L16 22C17.105 22 18 21.105 18 20L18 19"/>
  <path d="M8 2L8 7C8 7.552 7.552 8 7 8L2 8"/>
  <path d="M6 12L9 12"/>
  <path d="M11 8L13 8"/>
  <path d="M6 16L8 16"/>
</svg>
