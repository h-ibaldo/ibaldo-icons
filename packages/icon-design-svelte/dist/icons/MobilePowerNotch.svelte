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
  <path d="M7 2L17 2C18.105 2 19 2.895 19 4L19 20C19 21.105 18.105 22 17 22L7 22C5.895 22 5 21.105 5 20L5 4C5 2.895 5.895 2 7 2Z"/>
  <path d="M13 5L11 5"/>
  <path d="M12 10L12 14"/>
  <path d="M15 11.355C15.621 12.059 16 12.984 16 14C16 16.211 14.211 18 12 18C9.789 18 8 16.211 8 14C8 12.984 8.379 12.059 9 11.355"/>
</svg>
