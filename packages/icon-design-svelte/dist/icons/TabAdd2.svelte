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
  <polygon points="22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 11.025268532079281 1.99877930112325 11.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325"/>
  <line x1="22.025268532079281" y1="1.99877930112325" x2="15.025268532079281" y2="1.99877930112325"/>
  <line x1="12.025268532079281" y1="10.99877930112325" x2="12.025268532079281" y2="17.99877930112325"/>
  <line x1="15.525268532079281" y1="14.49877930112325" x2="8.525268532079281" y2="14.49877930112325"/>
</svg>
