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
  <path d="M19 21L7.5 21C6.117 21 5 19.883 5 18.5C5 17.117 6.117 16 7.5 16L19 16Z"/>
  <path d="M5 18.5L5 5.5C5 4.117 6.117 3 7.5 3L19 3L19 16"/>
  <path d="M9 8L15 8"/>
</svg>
