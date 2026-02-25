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
  <polyline points="8.999999999979991 14.000000052978066 11.999999999979991 11.000000026488124 14.999999999979991 14.000000052978066" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.999999999979991" y1="19.000000026488124" x2="11.999999999979991" y2="11.000000026488124" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.000000012591045,10.999999999998181h-.025207519542164c.014892578130457-.164916992180224.025207519542164-.331176757809772.025207519542164-.5,0-3.037536621090112-2.462463378911707-5.5-5.5-5.5-2.138366699220569,0-3.987365722661707,1.222900390630457-4.897277832042164,3.005187988270336-.034545898428405-.000610351560681-.068054199207836-.005187988270336-.102722167957836-.005187988270336-3.037536621101026,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.462463378898974,5.5,5.5,5.5h10.5c2.209167480457836,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519542164-4-4-4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
