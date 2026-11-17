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
  <polyline points="10.0252685320811 21.99877930112325 2.0252685320811 21.99877930112325 2.0252685320811 1.99877930112325 10.0252685320811 1.99877930112325 13.0252685320811 5.99877930112325 22.0252685320811 5.99877930112325 22.0252685320811 9.99877930112325"/>
  <polyline points="15.0252685320811 1.99877930112325 22.0252685320811 1.99877930112325 22.0252685320811 5.99877930112325"/>
  <g>
  <circle cx="17.025268532090195" cy="16.998779306063625" r="5"/>
  <line x1="19.0252685320811" y1="16.99877930112325" x2="15.0252685320811" y2="16.998779301301511"/>
  </g>
</svg>
