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
  <path d="M6 3L8 3C8.555 3 9 3.449 9 4L9 20C9 20.551 8.555 21 8 21L6 21C5.445 21 5 20.551 5 20L5 4C5 3.449 5.445 3 6 3Z"/>
  <path d="M16 3L18 3C18.555 3 19 3.449 19 4L19 20C19 20.551 18.555 21 18 21L16 21C15.445 21 15 20.551 15 20L15 4C15 3.449 15.445 3 16 3Z"/>
</svg>
