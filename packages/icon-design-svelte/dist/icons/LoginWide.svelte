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
  <polyline points="13.974731449592582 17.000000000347427 8.974731450040053 11.999999999895408 13.974731450491163 7.000000000347427"/>
  <line x1="21.974731450043691" y1="12.000000001063199" x2="8.974731450040053" y2="11.999999999895408"/>
  <path d="M12.974731450043691,22.000000000481123H4.974731450043691c-1.656854249488788,0-3-1.343145750508484-3-3V5.000000000481123c0-1.656854249493335,1.343145750511212-3,3-3h8"/>
</svg>
