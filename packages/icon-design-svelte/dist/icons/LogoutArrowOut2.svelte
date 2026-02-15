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
  <polyline points="16.974731450040053 7.000000000481123 21.974731450043691 12.000000000481123 16.974731450040053 17.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.974731450040053" y1="12.000000000481123" x2="21.974731450043691" y2="12.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.974731450043691,22.000000000481123H4.974731450043691c-1.656854249493335,0-3-1.343145750508484-3-3V5.000000000481123c0-1.656854249493335,1.343145750506665-3,3-3h8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
