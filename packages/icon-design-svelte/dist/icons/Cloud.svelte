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
  <path d="M17.999999999989086,10.999999999998181h-.025207519538526c.014892578128638-.164916992180224.025207519538526-.331176757809772.025207519538526-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.13836669921875,0-3.987365722659888,1.222900390630457-4.897277832038526,3.005187988270336-.034545898430224-.000610351560681-.068054199211474-.005187988270336-.102722167961474-.005187988270336-3.037536621099207,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.462463378900793,5.5,5.5,5.5h10.5c2.209167480461474,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519538526-4-4-4Z"/>
</svg>
