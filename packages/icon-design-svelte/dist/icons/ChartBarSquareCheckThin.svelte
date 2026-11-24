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
  <polyline points="16.974731440099276 4.000000003885361 18.974731440099276 6.000000003885361 21.974731440099276 3.000000003885361"/>
  <path d="M21.974731440099276,9.000000003885361v8c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000003885361c0-2.761423749150708,2.238576250851111-5,5-5h6"/>
  <line x1="7.974731440099276" y1="16.000000003885361" x2="7.974731440099276" y2="12.000000003885361"/>
  <line x1="11.974731440099276" y1="16.000000003885361" x2="11.974731440099276" y2="8.000000003885361"/>
  <line x1="15.974731440099276" y1="16.000000003885361" x2="15.974731440099276" y2="11.000000003885361"/>
</svg>
