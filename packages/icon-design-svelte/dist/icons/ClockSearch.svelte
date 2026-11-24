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
  <polyline points="12.999999999959982 5.999999999869033 12.999999999959982 10.999999999869033 18 10.999999999887223"/>
  <circle cx="5.999999999974534" cy="15.999999999840838" r="3.999999999975898"/>
  <line x1="10.999999999959982" y1="21.999999999869033" x2="8.549072265579525" y2="19.058898925648464"/>
  <path d="M13.999999999959982,19.941345214709145c4.499450683590112-.497985839840112,8-4.309204101560681,8-8.941345214840112,0-4.970581054691138-4.029418945308862-9-9-9-4.281860351558862,0-7.85546875,2.993896484369543-8.766174316409888,7"/>
</svg>
