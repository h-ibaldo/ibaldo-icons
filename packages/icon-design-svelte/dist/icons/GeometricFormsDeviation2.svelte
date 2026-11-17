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
  <circle cx="6.00000000018008" cy="6.000000000446562" r="4"/>
  <circle cx="18.00000000018008" cy="18.000000000447017" r="3.999999999999773"/>
  <rect x="14.00000000018008" y="2.000000000446562" width="8" height="8"/>
  <circle cx="6.00000000018008" cy="18.000000000447017" r="3.999999999999773"/>
</svg>
