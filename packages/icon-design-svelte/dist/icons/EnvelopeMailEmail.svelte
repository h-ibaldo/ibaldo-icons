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
  <rect x="2.000000000224645" y="5.032754075946286" width="20" height="14" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.619750976787145,5.590493333755148l8.711282688577739,7.840188429130649c.380305456468705.342276395560475.957627213248998.342276395560475,1.337932669717702,0l8.711282688579558-7.840188429130649" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
