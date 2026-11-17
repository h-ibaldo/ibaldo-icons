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
  <path d="M10.974731440099276,17.000000003885361h3v2.684900338826992c0,.45975855089273.568257703540439.675809744698199.873704659350551.332181919413415l7.126295340649449-8.017082258236769L14.848436099449827,3.982917745644954c-.305446955810112-.343627825281146-.873704659350551-.127576631475677-.873704659350551.332181919417053v2.684900338823354H2.974731440099276c-.552284749819592,0-1,.447715250171314-1,1v2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="1.974731440099276 15.000000003885361 3.974731440099276 17.000000003885361 7.974731440099276 13.000000003885361" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
