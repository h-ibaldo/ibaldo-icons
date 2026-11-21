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
  <path d="M22 2L16.52 3.098C13.684 3.664 11.289 5.563 10.094 8.195L7 15L9 17L15.805 13.906C18.438 12.711 20.336 10.316 20.902 7.48Z"/>
  <path d="M14.762 14.383L12 22L9 17"/>
  <path d="M7 15L2 12L9.617 9.238"/>
  <path d="M14 8C14 6.895 14.895 6 16 6C17.105 6 18 6.895 18 8C18 9.105 17.105 10 16 10C14.895 10 14 9.105 14 8Z"/>
  <path d="M2 20.461L2 22L3.539 22C4.969 22 6.203 20.992 6.48 19.59L7 17L4.41 17.52C3.008 17.797 2 19.031 2 20.461Z"/>
</svg>
