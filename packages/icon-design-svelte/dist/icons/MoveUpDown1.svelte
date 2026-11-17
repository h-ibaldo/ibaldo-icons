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
  <line x1="21.000000004469257" y1="12.000000003885361" x2="3.000000004469257" y2="12.000000003885361"/>
  <line x1="21.000000004469257" y1="8.000000003885361" x2="3.000000004469257" y2="8.000000003885361"/>
  <polyline points="10.000000004469257 4.000000003886271 12.000000004469257 2.000000003886271 14.000000004469257 4.000000003886271"/>
  <line x1="12.000000004469257" y1="8.000000003885361" x2="12.000000004469257" y2="2.000000003886271"/>
  <line x1="3.000000004469257" y1="16.000000003885361" x2="21.000000004469257" y2="16.000000003885361"/>
  <polyline points="14.000000004469257 20.000000003885361 12.000000004469257 22.000000003885361 10.000000004469257 20.000000003885361"/>
  <line x1="12.000000004469257" y1="16.000000003885361" x2="12.000000004469257" y2="22.000000003885361"/>
</svg>
