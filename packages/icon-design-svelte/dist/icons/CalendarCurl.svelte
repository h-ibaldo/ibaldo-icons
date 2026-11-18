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
  <path d="M6 3L6 7"/>
  <path d="M14 3L14 7"/>
  <path d="M2 11L18 11"/>
  <path d="M18 16L18 7C18 5.895 17.105 5 16 5L4 5C2.895 5 2 5.895 2 7L2 17C2 19.211 3.789 21 6 21C8.211 21 10 19.211 10 17L10 16L22 16L22 17C22 19.211 20.211 21 18 21L17 21"/>
  <path d="M6 21L18 21"/>
</svg>
