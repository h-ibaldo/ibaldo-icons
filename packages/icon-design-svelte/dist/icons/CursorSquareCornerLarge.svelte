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
  <path d="M21 14.637L12.57 11.57C11.949 11.344 11.344 11.949 11.57 12.57L14.637 21C14.789 21.414 15.344 21.48 15.59 21.113L17 19L20 22L22 20L19 17L21.113 15.59C21.48 15.344 21.414 14.789 21 14.637Z"/>
  <path d="M9 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 11"/>
</svg>
