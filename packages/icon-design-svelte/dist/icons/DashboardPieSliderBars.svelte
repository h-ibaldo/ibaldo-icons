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
  <path d="M14 8C14 4.688 11.313 2 8 2C4.688 2 2 4.688 2 8C2 11.313 4.688 14 8 14C11.313 14 14 11.313 14 8Z"/>
  <path d="M8 2L8 8L14 8"/>
  <path d="M2 22L2 18"/>
  <path d="M6 22L6 20"/>
  <path d="M10 22L10 18"/>
  <path d="M14 22L14 20"/>
  <path d="M18 22L18 16"/>
  <path d="M22 22L22 13"/>
  <path d="M20 2L20 9"/>
  <path d="M20 6C20.555 6 21 5.555 21 5C21 4.445 20.555 4 20 4C19.445 4 19 4.445 19 5C19 5.555 19.445 6 20 6Z"/>
</svg>
