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
  <polyline points="11.000000001078661 14.99999999877582 8.000000001609806 11.999999998237399 11.000000002148226 8.99999999877582"/>
  <line x1="16.000000001609806" y1="11.999999999674401" x2="8.000000001609806" y2="11.999999998237399"/>
  <rect x="2.000000001614353" y="1.999999999045031" width="20" height="20" rx="1.999999999998408" ry="1.999999999998408"/>
</svg>
