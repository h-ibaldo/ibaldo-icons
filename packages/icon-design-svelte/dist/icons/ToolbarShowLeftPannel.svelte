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
  <rect x="2.050537047695798" y="1.997697219531346" width="20" height="19.999864816291392" rx="2.00000000000091" ry="2.00000000000091" transform="translate(24.101074094785993 23.99525925596236) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="2.050623966566491 5.997562035775445 7.050623966566491 5.997562035775445 7.050623966566491 17.997426743134383 2.050623966566491 17.997426743134383" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
