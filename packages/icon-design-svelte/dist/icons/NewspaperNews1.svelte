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
  <path d="M17.999988017745636,17.936828613277612V1.936828613277612H1.999988017745636v17c0,1.656854249489697,1.343145750510303,3,3,3h14c1.656854249489697,0,3-1.343145750510303,3-3V6.936828613277612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="5.999988017745636" y="5.936828613277612" width="4" height="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.999988017745636" y1="5.936828613277612" x2="13.999988017745636" y2="5.936828613277612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.999988017745636" y1="13.936828613277612" x2="13.999988017745636" y2="13.936828613277612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.999988017745636" y1="17.936828613277612" x2="13.999988017745636" y2="17.936828613277612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.999988017745636" y1="9.936828613277612" x2="13.999988017745636" y2="9.936828613277612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
