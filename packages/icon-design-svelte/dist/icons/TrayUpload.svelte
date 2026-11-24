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
  <polyline points="6.974731449729006 7.000000000258296 11.974731449954561 2.000000000479304 16.974731449729006 7.000000000705768"/>
  <line x1="11.974731449368846" y1="15.000000000480213" x2="11.974731449954561" y2="2.000000000479304"/>
  <path d="M21.974731449550745,11.000000000927685l-.000000000361979,8c-.00000000007276,1.656854249494245-1.343145750642179,2.999999999942702-3.000000000135515,2.999999999865395l-14-.000000000625732c-1.656854249490607-.000000000076398-2.999999999937245-1.34314575064127-2.999999999864485-3.000000000134605l.000000000361979-8"/>
</svg>
