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
  <line x1="7.000000004900357" y1="13.999999995256076" x2="17.000000004900357" y2="13.999999995256076" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.000000004900357" y1="9.999999995256076" x2="17.000000004900357" y2="9.999999995256076" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.000000004900357" y1="17.999999995256076" x2="17.000000004900357" y2="17.999999995256076" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.000000004900357,21.999999995256076H4.000000004900357c-1.104569499670106,0-2-.895430500338989-2-2v-11.145898033748381c0-1.136316175361571.642007128679325-2.17510553059401,1.658359213490257-2.683281573001295L12.000000004900357,1.999999995256076l8.341640786500648,4.170820393250324c1.016352084809114.508176042407285,1.658359213499352,1.546965397639724,1.658359213499352,2.683281573001295v11.145898033748381c0,1.104569499661011-.895430500340808,2-2,2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
