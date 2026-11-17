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
  <path d="M6,18h-2c-1.104569499661011,0-2-.895430500338989-2-2V4c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500338989,2-2,2h-2"/>
  <line x1="2" y1="8" x2="22" y2="8"/>
  <line x1="5.010000000000218" y1="5" x2="5" y2="5"/>
  <line x1="8.010000000000218" y1="5" x2="8" y2="5"/>
  <line x1="19.000000006359187" y1="5" x2="11" y2="5"/>
  <polyline points="9 15 12 12 15 15"/>
  <path d="M12,12v6c0,2.209138999322022-1.790861000679797,4-4,4h-1"/>
</svg>
