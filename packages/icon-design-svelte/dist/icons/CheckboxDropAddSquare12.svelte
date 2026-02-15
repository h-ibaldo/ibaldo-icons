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
  <polyline points="5.974731440090181 9.000000003874447 7.974731440090181 11.000000003874447 11.974731440090181 7.000000003874447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="1.974731440090181" y="2.000000003874447" width="14" height="14" rx="3" ry="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.974731440090181,8.000000003874447h3c1.656854249489697,0,3,1.343145750510303,3,3v8c0,1.656854249493335-1.343145750510303,3-3,3h-8c-1.656854249489697,0-3-1.343145750506665-3-3v-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
