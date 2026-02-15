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
  <rect x="2" y="2.999999999998181" width="20" height="4" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21,6.999999999998181v13c0,.552284749830505-.503679656439999,1-1.125,1H4.125c-.621320343560001,0-1.125-.447715250169495-1.125-1V6.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="8" y="10.999999999998181" width="8" height="3" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
