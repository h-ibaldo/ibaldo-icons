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
  <circle cx="17.000000000184627" cy="15.000000019901563" r="3"/>
  <line x1="17.000000000184627" y1="12.000000019901563" x2="17.000000000184627" y2="2.000000019906111"/>
  <line x1="17.000000000184627" y1="22.000000019904292" x2="17.000000000184627" y2="18.000000019904292"/>
  <circle cx="7.000000000184627" cy="9.000000019906111" r="3"/>
  <line x1="7.000000000184627" y1="12.000000019906111" x2="7.000000000184627" y2="22.000000019901563"/>
  <line x1="7.000000000184627" y1="2.000000019904292" x2="7.000000000184627" y2="6.000000019904292"/>
</svg>
