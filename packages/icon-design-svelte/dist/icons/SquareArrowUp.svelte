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
  <polyline points="9.025268534540373 10.999999998695785 12.025268534680436 7.99999999883039 15.025268534540373 10.999999998964995" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.025268534320276" y1="15.99999999883039" x2="12.025268534680436" y2="7.999999998826752" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2.025268534409406" y="1.999999998828571" width="20" height="20" rx="1.999999999997726" ry="1.999999999997726" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
