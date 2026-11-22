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
  <path d="M2 18L2 5C2 3.344 3.344 2 5 2L9.949 2"/>
  <path d="M18 18L6 18"/>
  <path d="M18 14L6 14C3.789 14 2 15.789 2 18C2 20.211 3.789 22 6 22L18 22"/>
  <path d="M12.211 6.906L13.211 6.906C13.762 6.906 14.211 7.355 14.211 7.906L14.211 9.906C14.211 10.457 13.762 10.906 13.211 10.906C12.656 10.906 12.211 10.457 12.211 9.906L12.211 5.906C12.211 3.695 14 1.906 16.211 1.906L18.211 1.906C20.418 1.906 22.211 3.695 22.211 5.906L22.211 9.906C22.211 10.457 21.762 10.906 21.211 10.906C20.656 10.906 20.211 10.457 20.211 9.906L20.211 7.906C20.211 7.355 20.656 6.906 21.211 6.906L22.211 6.906"/>
</svg>
