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
  <circle cx="11.999999990798642" cy="16.000000000446562" r="3"/>
  <line x1="11.999999990798642" y1="13.000000000446562" x2="11.999999990798642" y2="2.000000019906111"/>
  <line x1="11.999999990798642" y1="22.000000019904292" x2="11.999999990798642" y2="19.000000000448381"/>
  <circle cx="5.000000000184627" cy="8.0000000004502" r="3"/>
  <line x1="5.000000000184627" y1="11.0000000004502" x2="5.000000000184627" y2="22.000000019901563"/>
  <line x1="5.000000000184627" y1="2.000000019904292" x2="5.000000000184627" y2="5.000000000448381"/>
  <circle cx="18.999999990798642" cy="8.0000000004502" r="3"/>
  <line x1="18.999999990798642" y1="11.0000000004502" x2="18.999999990798642" y2="22.000000019901563"/>
  <line x1="18.999999990798642" y1="2.000000019904292" x2="18.999999990798642" y2="5.000000000448381"/>
</svg>
