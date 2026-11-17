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
  <rect x="1.974731450026411" y="7.000000000459295" width="14" height="15" rx="3" ry="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.974731450026411,7.000000000459295v-1.999999999997272c0-1.656854249496064,1.343145750505755-3,3-3h8c1.656854249493335,0,3,1.343145750503936,3,3v9c0,1.656854249490607-1.343145750510303,3-3,3l-3-.000000000002728" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="11.974731450026411 15.000000000462023 8.974731449353385 18.000000000462023 5.974731450026411 15.000000000462023" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.974731451103253" y1="11.000000000462023" x2="8.974731449353385" y2="18.000000000462023" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
