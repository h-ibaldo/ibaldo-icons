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
  <path d="M13 15L11 21"/>
  <path d="M16 16L18 18L16 20"/>
  <path d="M8 16L6 18L8 20"/>
  <path d="M20.977 16C21.609 15.16 22 14.133 22 13C22 10.555 20.242 8.527 17.922 8.094C17.488 5.211 15.004 3 12 3C8.996 3 6.512 5.211 6.078 8.094C3.758 8.527 2 10.555 2 13C2 14.133 2.391 15.16 3.023 16"/>
</svg>
