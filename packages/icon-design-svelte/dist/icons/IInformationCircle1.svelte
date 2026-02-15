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
  <circle cx="11.94946287847597" cy="11.997562036048294" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.949462878465056" y1="7.987562035596966" x2="11.949462878465056" y2="7.997562035597184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.949462878465056" y1="15.997562035597184" x2="11.949462878465056" y2="11.997562035597184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
