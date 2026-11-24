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
  <rect x="2.974731450026411" y="6.000000000462023" width="14" height="15.999999999997272" rx="3" ry="3"/>
  <path d="M6.974731450026411,2.000000000462023h11c1.656854249493335,0,3,1.343145750503936,3,3v13"/>
  <polyline points="12.974731450026411 15.000000000462023 9.974731449353385 18.000000000462023 6.974731450026411 15.000000000462023"/>
  <line x1="9.974731451103253" y1="10.000000000462023" x2="9.974731449353385" y2="18.000000000462023"/>
</svg>
