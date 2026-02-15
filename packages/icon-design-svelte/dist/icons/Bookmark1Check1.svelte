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
  <polyline points="14.000000000003638 5.999999999989086 16.000000000003638 7.999999999989086 20.000000000003638 2.999999999989086" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.000000000007276,2.999999999998181h-5.000000000003638c-.552284749830505,0-1,.447715250169495-1,1v18l7-4,7,4v-11.000000000009095" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
