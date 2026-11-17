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
  <polyline points="9.999999977098923 16.999996563434252 9.999999977098923 6.999996563434252 5.999999977098923 6.999996563434252 5.999999977098923 16.999996563434252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.999999977098923" y1="12.999996563434252" x2="9.999999977098923" y2="12.999996563434252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="13.999999977098923 11.999996563434252 17.999999977098923 14.999996563434252 17.999999977098923 16.999996563434252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="13.999999977098923 16.999996563434252 13.999999977098923 6.999996563434252 17.999999977098923 6.999996563434252 17.999999977098923 11.999996563434252 13.999999977098923 11.999996563434252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="1.999999977098923" y="2.999996563434252" width="20" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
