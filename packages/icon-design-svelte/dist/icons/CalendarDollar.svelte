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
  <path d="M8 2L8 5"/>
  <path d="M16 2L16 5"/>
  <path d="M22 20L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z"/>
  <path d="M14 9.5L13.449 9.316C12.82 9.105 12.16 9 11.5 9C10.395 9 9.5 9.895 9.5 11C9.5 12.105 10.395 13 11.5 13L12.5 13C13.605 13 14.5 13.895 14.5 15C14.5 16.105 13.605 17 12.5 17C11.84 17 11.18 16.895 10.551 16.684L10 16.5"/>
  <path d="M12 8L12 9"/>
  <path d="M12 17L12 18"/>
</svg>
