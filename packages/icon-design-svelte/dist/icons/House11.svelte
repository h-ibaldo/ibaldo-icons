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
  <polygon points="12.00000000018008 3.000000000842192 2.00000000018008 12.000000000842192 5.00000000018008 12.000000000842192 5.00000000018008 21.000000000842192 10.00000000018008 21.000000000842192 10.00000000018008 16.000000000842192 14.00000000018008 16.000000000842192 14.00000000018008 21.000000000842192 19.00000000018008 21.000000000842192 19.00000000018008 12.000000000842192 22.00000000018008 12.000000000842192 12.00000000018008 3.000000000842192"/>
  <line x1="18.00000000018008" y1="4.000000000842192" x2="18.00000000018008" y2="8.280625818604676"/>
</svg>
