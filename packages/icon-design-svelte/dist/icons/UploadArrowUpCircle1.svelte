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
  <polyline points="8.974731450203763 5.000000000997716 11.974731451145999 2.000000001266926 14.974731450203763 5.000000001537956" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.97473144849755" y1="11.000000001537956" x2="11.974731451145999" y2="2.000000001266926" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.974731450025502" y1="15.000000001537956" x2="15.974731450025502" y2="15.000000001537956" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.839050297681752,5.000000001537956c-1.7698974609375,1.80401611328125-2.86431884765625,4.273132324217841-2.86431884765625,7,0,5.522827148436591,4.4771728515625,10,10,10s10-4.477172851563409,10-10c0-2.726867675782159-1.09442138671875-5.19598388671875-2.86431884765625-7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
