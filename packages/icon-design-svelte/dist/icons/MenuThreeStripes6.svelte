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
  <line x1="2" y1="12.000000078527592" x2="22" y2="12.000000078527592"/>
  <line x1="2" y1="7.000000078527592" x2="22" y2="7.000000078527592"/>
  <line x1="2" y1="17.000000078527592" x2="22" y2="17.000000078527592"/>
</svg>
