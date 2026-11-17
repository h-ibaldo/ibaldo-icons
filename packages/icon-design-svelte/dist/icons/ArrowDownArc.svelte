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
  <path d="M21.00000000018008,12.000000000842192c0,4.970562748196244-4.029437251800118,9-9,9S3.00000000018008,16.970562749038436,3.00000000018008,12.000000000842192"/>
  <polyline points="8.00000000018008 11.000000000842192 12.00000000018008 15.000000000842192 16.00000000018008 11.000000000842192"/>
  <line x1="12.00000000018008" y1="3.000000000842192" x2="12.00000000018008" y2="15.000000000842192"/>
</svg>
