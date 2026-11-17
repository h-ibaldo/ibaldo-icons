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
  <line x1="1.974731449505271" y1="5.000000000479304" x2="21.974731449505271" y2="5.000000000479304"/>
  <line x1="3.974731449505271" y1="10.000000000480213" x2="19.974731449505271" y2="10.000000000480213"/>
  <line x1="5.974731449505271" y1="15.000000000480213" x2="17.974731449505271" y2="15.000000000480213"/>
  <line x1="7.974731449505271" y1="20.000000000480213" x2="15.974731449505271" y2="20.000000000480213"/>
</svg>
