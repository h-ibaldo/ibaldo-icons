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
  <path d="M10.000000000003638,2.999999999998181h-4.000000000005457c-.552284749828686,0-1,.447715250169495-1,1v18l7-4,7,4v-10.000000000009095" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="14.000000000003638" y1="4.999999999989086" x2="20.000000000003638" y2="4.999999999989086" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="17.000000000003638" y1="1.999999999989086" x2="17.000000000003638" y2="7.999999999989086" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
