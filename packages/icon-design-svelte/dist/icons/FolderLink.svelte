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
  <path d="M8 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L8.465 2C8.801 2 9.109 2.168 9.297 2.445L10.703 4.555C10.891 4.832 11.199 5 11.535 5L18 5C19.105 5 20 5.895 20 7L20 8"/>
  <path d="M20 18L21.172 16.828C22.277 15.723 22.277 13.934 21.172 12.828C20.066 11.723 18.277 11.723 17.172 12.828L16 14"/>
  <path d="M14 16L12.828 17.172C11.723 18.277 11.723 20.066 12.828 21.172C13.934 22.277 15.723 22.277 16.828 21.172L18 20"/>
  <path d="M18 16L16 18"/>
</svg>
