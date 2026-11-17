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
  <path d="M10 2L14 2"/>
  <path d="M20 5L22 7"/>
  <path d="M21 6L18.563 8.438"/>
  <path d="M6 16L6 16"/>
  <path d="M6 12C8.211 12 10 13.789 10 16C10 19 6 22 6 22C6 22 2 19 2 16C2 13.789 3.789 12 6 12"/>
  <path d="M12 9L12 13"/>
  <path d="M8.129 19.977C9.277 20.617 10.59 21 12 21C16.418 21 20 17.418 20 13C20 8.582 16.418 5 12 5C7.879 5 4.484 8.121 4.051 12.125L4.195 12.449"/>
</svg>
