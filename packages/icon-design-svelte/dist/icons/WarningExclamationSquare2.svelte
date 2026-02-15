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
  <rect x="3.974731450040053" y="4.000000000479304" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.974731450040053" y1="15.010000000480431" x2="11.974731450040053" y2="15.000000000479304" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.974731450040053" y1="9.000000000479304" x2="11.974731450040053" y2="12.000000000479304" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
