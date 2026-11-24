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
  <line x1="10.974731440099276" y1="4.000000003885361" x2="21.974731440099276" y2="4.000000003885361"/>
  <line x1="10.974731440099276" y1="12.000000003885361" x2="21.974731440099276" y2="12.000000003885361"/>
  <line x1="10.974731440099276" y1="20.000000003885361" x2="21.974731440099276" y2="20.000000003885361"/>
  <polyline points="1.974731440099276 20.000000003885361 3.974731440099276 22.000000003885361 6.974731440099276 18.000000003885361"/>
  <rect x="1.974731440099276" y="2.000000003885361" width="4" height="4"/>
  <rect x="1.974731440099276" y="10.000000003885361" width="4" height="4"/>
</svg>
