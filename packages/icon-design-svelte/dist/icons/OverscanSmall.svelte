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
  <rect x="1.974731449505271" y="3.000000000479304" width="20" height="18.000000000000909" rx="3" ry="3"/>
  <polyline points="12.974731449505271 8.000000000480213 11.974731450083709 7.000000000298314 10.974731449505271 8.000000000480213"/>
  <polyline points="12.974731449505271 16.000000000480213 11.974731450083709 17.000000000662112 10.974731449505271 16.000000000480213"/>
  <polyline points="16.974731449323372 13.000000000480213 17.974731449505271 12.00000000106229 16.974731449323372 11.000000000480213"/>
  <polyline points="6.974731449683532 13.000000000480213 5.974731449505271 12.00000000106229 6.974731449683532 11.000000000480213"/>
</svg>
