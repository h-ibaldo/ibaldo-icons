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
  <path d="M7.999999993642632,21.998779299956368h-1c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h10c1.656854249500611,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750499389,3-3,3h-1"/>
  <line x1="3.999999993642632" y1="6.998779299956368" x2="19.999999993642632" y2="6.998779299956368"/>
  <polyline points="8.999999993642632 15.998779299956368 11.999999993642632 12.998779299956368 14.999999993642632 15.998779299956368"/>
  <line x1="11.999999993642632" y1="12.998779299956368" x2="11.999999993642632" y2="21.998779299956368"/>
</svg>
