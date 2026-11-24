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
  <path d="M4 16L3 16C2.445 16 2 15.555 2 15L2 3C2 2.445 2.445 2 3 2L21 2C21.555 2 22 2.445 22 3L22 12"/>
  <path d="M3.109 3L10.664 9.797C11.422 10.48 12.578 10.48 13.34 9.797L20.887 3"/>
  <path d="M13 18C13 16.344 14.344 15 16 15L19 15C20.656 15 22 16.344 22 18C22 19.656 20.656 21 19 21"/>
  <path d="M17 18C17 19.656 14.656 21 13 21L11 21C9.344 21 8 19.656 8 18C8 16.344 9.344 15 11 15"/>
</svg>
