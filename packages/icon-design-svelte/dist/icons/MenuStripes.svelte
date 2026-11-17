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
  <line x1="4.000000004889444" y1="11.999999995256076" x2="20.000000004889444" y2="11.999999995256076" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="4.000000004889444" y1="4.999999995256076" x2="20.000000004889444" y2="4.999999995256076" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="4.000000004889444" y1="18.999999995256076" x2="15.000000004889444" y2="18.999999995256076" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
