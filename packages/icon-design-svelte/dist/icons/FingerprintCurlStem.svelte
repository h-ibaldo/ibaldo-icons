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
  <path d="M18,16.999999999996362c-3.313708498799315,0-6-2.686291501197957-6-6"/>
  <path d="M4,11c0-4.418277998400299,3.581722001599701-8,8-8s8,3.581722001599701,8,8"/>
  <path d="M18,21c-5.522847497999464,0-10-4.477152502000536-10-10"/>
  <path d="M16,10.999999999996362c0,1.104569499602803.895430500400835,2,2,2s2-.895430500397197,2-2"/>
  <path d="M16,10.999999999996362c0-2.20916748046875-1.790832519529431-4-4-4s-4,1.79083251953125-4,4"/>
  <line x1="4" y1="11" x2="4" y2="21"/>
  <line x1="18" y1="17" x2="19" y2="17"/>
  <line x1="18" y1="21" x2="19" y2="21"/>
  <path d="M7,18v.000002000000677c0,1.225730922553339.692525544300224,2.346260772144888,1.788852593150295,2.894424296569923l.211147406849705.1055737034294"/>
</svg>
