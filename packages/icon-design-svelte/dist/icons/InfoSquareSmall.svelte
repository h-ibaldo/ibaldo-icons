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
  <rect x="3.949462878465056" y="3.997562035597184" width="16" height="16" rx="3" ry="3"/>
  <line x1="11.949462878465056" y1="8.987562035596966" x2="11.949462878465056" y2="8.997562035597184"/>
  <line x1="11.949462878465056" y1="14.997562035597184" x2="11.949462878465056" y2="11.997562035597184"/>
</svg>
