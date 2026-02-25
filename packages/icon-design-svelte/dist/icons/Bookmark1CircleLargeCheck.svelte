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
  <polyline points="13.999999973304512 7.499999997568011 15.499999973304512 9.499999997568011 17.999999973304512 6.499999997568011" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16,1.999999999998181H2.999999973299964c-.552307128899884,0-1,.447692871090112-1,1v19l7-4,7.000000000004547,4v-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="15.999999975731725" cy="7.999999997570285" r="5.999999997574037" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
