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
  <path d="M13 15L19.172 8.828C20.277 7.723 20.277 5.934 19.172 4.828C18.066 3.723 16.277 3.723 15.172 4.828L6.449 13.551C4.516 15.484 4.516 18.617 6.449 20.551C8.383 22.484 11.516 22.484 13.449 20.551L21.895 12.105"/>
  <path d="M2 5L8 5"/>
  <path d="M5 2L5 8"/>
</svg>
