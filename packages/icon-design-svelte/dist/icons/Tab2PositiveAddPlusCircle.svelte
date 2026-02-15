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
  <polyline points="10.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 11.025268532079281 1.99877930112325 11.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 9.99877930112325" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="22.025268532079281" y1="1.99877930112325" x2="15.025268532079281" y2="1.99877930112325" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <circle cx="17.025268532090195" cy="16.998779306063625" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <g>
      <line x1="17.025268532090195" y1="14.998779301214199" x2="17.025268532090195" y2="18.998779301211471" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="19.025268532079281" y1="16.99877930112325" x2="15.025268532079281" y2="16.998779301301511" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
</svg>
