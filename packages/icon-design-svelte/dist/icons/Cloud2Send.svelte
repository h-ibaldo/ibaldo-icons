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
  <line x1="18.000000000020009" y1="8.999999973519152" x2="17.000000000020009" y2="7.999999973519152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="15.000000000020009 12.999999973508238 11.000000000020009 1.999999973519152 22.000000000020009 5.999999973508238 18.000000000020009 8.999999973508238 15.000000000020009 12.999999973508238" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.000000000020009,7.100769042957836c-2.282165527340112.46337890625-4,2.480346679700233-4,4.899230957040345,0,.137084960940228.029541015630457.265869140610448.040344238279431.400207519529431-1.787048339840112.762390136720569-3.040344238279431,2.5341796875-3.040344238279431,4.599792480470569,0,2.761413574209655,2.238586425779431,5,5,5h11c2.209167480470569,0,4-1.790832519540345,4-4,0-1.866821289059772-1.284423828119543-3.421691894540345-3.013793945310681-3.862854003909888" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
