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
  <polyline points="2.999999981180736 21.999996564258254 2.999999981318979 16.999996564258254 7.999999981180736 16.999996564392859" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.999999981180736,11.999996564258254C1.999999981180736,6.477169415820754,6.477172832750512,1.999996564258254,11.999999981180736,1.999996564258254c5.522827148439319,0,10,4.4771728515625,10,10,0,5.52288818359375-4.477172851560681,10-10,10-3.69921875,0-6.921447753900793-2.01385498046875-8.651245117180224-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="11.999999981180736" cy="11.999996564258254" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
