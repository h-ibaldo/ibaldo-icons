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
  <polyline points="17.075805664055224 8.998782737457077 20.075805663656865 11.998782737860893 17.075805663256688 14.998782737457077" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.075805663656865" y1="11.998782736780413" x2="20.075805663656865" y2="11.998782737860893" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="8.075805663656411" cy="11.998782736241992" r="4.000000000000227" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
