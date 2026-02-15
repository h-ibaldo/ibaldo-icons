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
  <polyline points="1.949462882913394 8.998779299525268 1.949462882913394 1.998779299525268 8.949462882913394 1.998779299525268" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="21.949462883221713 14.998781724209039 21.949462883221713 21.998778260107429 14.949466347312409 21.998778260107429" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
