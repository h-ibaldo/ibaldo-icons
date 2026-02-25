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
  <path d="M3.999999993642632,17.075561526518868V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h10c1.656854249500611,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750499389,3-3,3h-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="8.999999993642632 12.998779299956368 12.999999993642632 12.998779299956368 12.999999993642632 16.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="3.999999993642632" y1="21.998779299956368" x2="12.999999993642632" y2="12.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
