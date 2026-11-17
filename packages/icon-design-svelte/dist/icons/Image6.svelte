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
  <path d="M16.12584271715059,14.572262396974111l-2.094592723880851,3.770266902982257-4.150778900078876-7.70858938586025c-.377569357820903-.701200235951546-1.383372842021345-.701200235951546-1.760942199840429,0L1.999999993269739,21.998779299956368h20l-4.125842723879032-7.426516902982257c-.38100523616049-.685809425092884-1.367309316079627-.685809425092884-1.748314552240117,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16.999999993269739" cy="5.998779299956368" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
