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
  <path d="M21.999999990599463,11.000000005347829v6c0,2.761423749150708-2.238576250839287,5-5,5H6.999999990599463c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000005347829c0-2.761423749150708,2.238576250850201-5,5-5h6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="6.999999990599463 15.000000005169568 9.999999990599463 11.000000005169568 13.999999990599463 14.000000005169568 16.999999990599463 10.000000005169568" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="17.999999990599463" y1="6.000000005347829" x2="21.999999990599463" y2="2.000000005347829" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="21.999999990699507" y1="6.000000005260517" x2="17.999999990510332" y2="2.000000005438778" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
