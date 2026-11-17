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
  <polygon points="22.025268532079281 21.998779297172405 2.025268532079281 21.998779297172405 2.025268532079281 1.998779297172405 11.025268532079281 1.998779297172405 11.025268532079281 5.998779297172405 22.025268532079281 5.998779297172405 22.025268532079281 21.998779297172405" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="22.025268532079281" y1="1.998779297172405" x2="15.025268532079281" y2="1.998779297172405" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="15.025268532079281" y1="16.998779297172405" x2="9.025268532079281" y2="10.998779297172405" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="15.025268532079281" y1="10.998779297172405" x2="9.025268532079281" y2="16.998779297172405" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
