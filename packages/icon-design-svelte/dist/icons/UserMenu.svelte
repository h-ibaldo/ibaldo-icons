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
  <line x1="22.000000004900357" y1="6.999999995256076" x2="17.000000004900357" y2="6.999999995256076"/>
  <line x1="22.000000004900357" y1="11.999999995256076" x2="17.000000004900357" y2="11.999999995256076"/>
  <line x1="22.000000004900357" y1="16.999999995256076" x2="17.000000004900357" y2="16.999999995256076"/>
  <circle cx="7.500000004900357" cy="8.499999995256076" r="3.5"/>
  <path d="M13.000000004900357,18.999999995256076v-2c0-2.761423749154346-2.238576250849292-5-5-5h-1c-2.761423749159803,0-5,2.238576250845654-5,5v2"/>
</svg>
