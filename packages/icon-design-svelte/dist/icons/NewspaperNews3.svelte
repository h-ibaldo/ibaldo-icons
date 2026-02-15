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
  <path d="M17.999988017745636,17.936828613277612l-.000000032989192-16-2.000000032981916,1-1.999996798709617-1-2.000003135319275,1-2-1-2,1-2-1-2,1L1.999988017745636,1.936828613277612v17c0,1.656854249489697,1.343145750510303,3,3,3h14c1.656854249489697,0,3-1.343145750510303,3-3V6.936828613277612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="5.999988017745636" y="6.936828613277612" width="8" height="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.999988017745636" y1="13.936828613277612" x2="13.999988017745636" y2="13.936828613277612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.999988017745636" y1="17.936828613277612" x2="13.999988017745636" y2="17.936828613277612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
