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
  <path d="M10 14C8.895 14 8 13.105 8 12C8 10.895 8.895 10 10 10"/>
  <path d="M15 14C13.895 14 13 13.105 13 12C13 10.895 13.895 10 15 10"/>
  <path d="M16 20L8 20C5.789 20 4 18.211 4 16L4 8C4 5.789 5.789 4 8 4L16 4C18.211 4 20 5.789 20 8L20 16C20 18.211 18.211 20 16 20Z"/>
</svg>
