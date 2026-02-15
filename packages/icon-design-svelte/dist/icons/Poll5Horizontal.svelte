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
  <polyline points="2.025268534409406 1.99999999883039 13.025268534409406 1.99999999883039 13.025268534409406 5.99999999883039 2.025268534409406 5.99999999883039" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="2.025268534409406 9.99999999883039 6.025268534409406 9.99999999883039 6.025268534409406 13.99999999883039 2.025268534409406 13.99999999883039" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="2.025268534409406 17.99999999883039 10.025268534409406 17.99999999883039 10.025268534409406 21.99999999883039 2.025268534409406 21.99999999883039" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="17.025268534409406 2.99999999883039 19.025268534409406 4.99999999883039 22.025268534409406 1.99999999883039" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.025268534409406" y1="13.99999999883039" x2="14.025268534409406" y2="9.99999999883039" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.025268534409406" y1="9.99999999883039" x2="14.025268534409406" y2="13.99999999883039" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="14.025268534409406" y1="21.99999999883039" x2="18.025268534409406" y2="17.99999999883039" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="14.025268534409406" y1="17.99999999883039" x2="18.025268534409406" y2="21.99999999883039" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
