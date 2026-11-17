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
  <path d="M11.105 14L17.277 7.828C18.383 6.723 18.383 4.934 17.277 3.828C16.172 2.723 14.383 2.723 13.277 3.828L4.555 12.551C2.621 14.484 2.621 17.617 4.555 19.551C6.488 21.484 9.621 21.484 11.555 19.551L20 11.105"/>
</svg>
