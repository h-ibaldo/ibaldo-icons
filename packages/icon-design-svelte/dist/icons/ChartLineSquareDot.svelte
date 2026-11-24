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
  <path d="M22,10.000000004136382v7c0,2.761423749150708-2.238576250850201,5-5,5H7c-2.761423749139794,0-5-2.238576250849292-5-5V7.000000004136382c0-2.761423749150708,2.238576250860206-5,5-5h7"/>
  <polyline points="7 15.000000004136382 10 11.000000004136382 14 14.000000004136382 17 10.000000004136382"/>
  <circle cx="19.5" cy="4.500000004136382" r="2.5"/>
</svg>
