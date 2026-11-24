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
  <path d="M20 13C21.105 13 22 13.895 22 15L22 20C22 21.105 21.105 22 20 22C18.895 22 18 21.105 18 20L18 15C18 13.895 18.895 13 20 13Z"/>
  <path d="M4 13C5.105 13 6 13.895 6 15L6 20C6 21.105 5.105 22 4 22C2.895 22 2 21.105 2 20L2 15C2 13.895 2.895 13 4 13Z"/>
  <path d="M2 15L2 12.016C2 6.484 6.484 2 12.016 2C17.547 2 22.031 6.484 22.031 12.016L22.031 15"/>
  <path d="M9 7L15 13"/>
  <path d="M15 7L9 13"/>
</svg>
