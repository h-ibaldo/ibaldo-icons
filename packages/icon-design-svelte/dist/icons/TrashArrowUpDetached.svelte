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
  <path d="M17.97473145010008,6.000000000459295v14c0,1.104569499661011-.895430500339899,2-2,2H7.97473145010008c-1.104569499670106,0-2-.895430500338989-2-2V6.000000000459295"/>
  <line x1="19.97473145010008" y1="6.000000000459295" x2="3.97473145010008" y2="6.000000000459295"/>
  <line x1="8.97473145010008" y1="2.000000000459295" x2="13.97473145010008" y2="2.000000000459295"/>
  <polyline points="9.974731450090076 13.000000000459295 11.974731450080071 11.000000000459295 13.974731450090076 13.000000000459295"/>
  <line x1="11.974731450080071" y1="17.000000000459295" x2="11.974731450080071" y2="11.000000000459295"/>
</svg>
