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
  <path d="M21 15L18 14L18 21"/>
  <path d="M18 21C18 21.551 17.328 22 16.5 22C15.672 22 15 21.551 15 21C15 20.449 15.672 20 16.5 20C17.328 20 18 20.449 18 21Z"/>
  <path d="M11 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.645 2 14.25 2.25 14.695 2.695L18.305 6.305C18.75 6.75 19 7.355 19 7.984L19 10"/>
  <path d="M13 2L13 7C13 7.551 13.449 8 14 8L19 8"/>
</svg>
