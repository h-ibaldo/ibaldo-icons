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
  <rect x="1.999999981189831" y="12.999996564258254" width="20" height="6"/>
  <path d="M20.999999981180736,18.999996564258254v2c0,.552284749828686-.503679656439999,1-1.125,1H4.124999981189831c-.621320343560001,0-1.125-.447715250171314-1.125-1v-2"/>
  <line x1="4.999999981189831" y1="15.999996564258254" x2="5.999999981189831" y2="15.999996564258254"/>
  <line x1="5.999999981189831" y1="1.999996564258254" x2="21.999999981189831" y2="12.999996564258254"/>
</svg>
