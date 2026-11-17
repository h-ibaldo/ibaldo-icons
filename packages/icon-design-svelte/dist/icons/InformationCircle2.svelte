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
  <circle cx="11.949462874325036" cy="11.997562036765885" r="8.000000000000455"/>
  <line x1="11.949462874325036" y1="8.987562036764757" x2="11.949462874325036" y2="8.997562036764975"/>
  <line x1="11.949462874325036" y1="14.997562036764975" x2="11.949462874325036" y2="11.997562036764975"/>
</svg>
