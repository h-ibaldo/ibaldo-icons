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
  <path d="M3.651024002283521,21.000000000480213h16.59687776571991c1.2149534782111,0,1.985137022384151-1.302589263192203,1.399628161134387-2.367150829100865L13.349091046276953,3.544778475268686c-.606877224689015-1.103413135799201-2.192379097576122-1.103413135799201-2.799256322270594,0L2.251395841150952,18.632849171379348c-.585508861253402,1.064561565908662.18467468291783,2.367150829100865,1.399628161132568,2.367150829100865Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.349487299205066" y1="9.000000000480213" x2="7.549438471080066" y2="9.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="4.249450678114954" y1="15.000000000480213" x2="19.649475092173816" y2="15.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="17.949462885142566 4.000000000480213 19.949462885142566 2.000000000480213 21.949462885142566 4.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="19.949462885142566" y1="7.000000000480213" x2="19.949462885142566" y2="2.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
