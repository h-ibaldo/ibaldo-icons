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
  <rect x="2.050537047695798" y="1.997697219531346" width="20" height="19.999864816291392" rx="2.000000000000773" ry="2.000000000000773" transform="translate(24.10107409599652 23.995259254746493) rotate(180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="6.050537043436634 1.997697235342457 6.050537043436634 6.997697235342457 18.050537043436634 6.997697235342457 18.050537043436634 1.997697235342457" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
