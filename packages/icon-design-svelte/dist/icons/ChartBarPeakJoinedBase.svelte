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
  <polyline points="5.016630450163575 21.000000000010914 5.016630450163575 12.000000000010914 10.016630450163575 12.000000000010914 10.016630450163575 3.000000000010914 15.016630450163575 3.000000000010914 15.016630450163575 8.000000000010914 20.016630450163575 8.000000000010914 20.016630450163575 21.000000000010914"/>
  <line x1="21.766630450163575" y1="21.000000000050932" x2="2.266630450163575" y2="21.000000000040018"/>
  <line x1="10.016630450163575" y1="12.000000000010914" x2="10.016630450163575" y2="21.000000000010914"/>
  <line x1="15.016630450163575" y1="8.000000000010914" x2="15.016630450163575" y2="21.000000000010914"/>
</svg>
