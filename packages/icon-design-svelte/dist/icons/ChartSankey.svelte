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
  <path d="M21 12C15 12 10 16 3 16C2.449 16 2 16.449 2 17L2 21C2 21.551 2.449 22 3 22C10 22 15 18 21 18C21.551 18 22 17.551 22 17L22 13C22 12.449 21.551 12 21 12Z"/>
  <path d="M13.195 13.715C10.07 11 6.836 8 3 8C2.449 8 2 7.551 2 7L2 3C2 2.449 2.449 2 3 2C10 2 15 12 21 12"/>
  <path d="M3 2L21 2C21.551 2 22 2.449 22 3L22 7C22 7.551 21.551 8 21 8L13.527 8"/>
</svg>
