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
  <path d="M20 22L4 22C2.895 22 2 21.105 2 20L2 10C2 8.895 2.895 8 4 8L20 8C21.105 8 22 8.895 22 10L22 20C22 21.105 21.105 22 20 22Z"/>
  <path d="M4 5L20 5"/>
  <path d="M6 2L18 2"/>
  <path d="M11.414 18.293L8.621 15.5C7.793 14.672 7.793 13.328 8.621 12.5C9.449 11.672 10.793 11.672 11.621 12.5L12.121 13L12.621 12.5C13.449 11.672 14.793 11.672 15.621 12.5C16.449 13.328 16.449 14.672 15.621 15.5L12.828 18.293C12.438 18.684 11.805 18.684 11.414 18.293Z"/>
</svg>
