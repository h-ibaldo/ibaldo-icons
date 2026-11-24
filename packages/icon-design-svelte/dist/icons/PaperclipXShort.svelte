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
  <path d="M12.105 14L18.277 7.828C19.383 6.723 19.383 4.934 18.277 3.828C17.172 2.723 15.383 2.723 14.277 3.828L5.555 12.551C3.621 14.484 3.621 17.617 5.555 19.551C7.488 21.484 10.621 21.484 12.555 19.551L21 11.105"/>
  <path d="M6 6L2 2"/>
  <path d="M6 2L2 6"/>
</svg>
