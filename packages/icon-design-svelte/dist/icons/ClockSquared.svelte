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
  <path d="M18 21L6 21C4.344 21 3 19.656 3 18L3 6C3 4.344 4.344 3 6 3L18 3C19.656 3 21 4.344 21 6L21 18C21 19.656 19.656 21 18 21Z"/>
  <path d="M12 7L12 12L16 12"/>
</svg>
