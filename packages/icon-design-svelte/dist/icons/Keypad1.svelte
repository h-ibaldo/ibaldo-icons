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
  <rect x="1.974731449503452" y="2.000000000479304" width="4" height="2"/>
  <rect x="9.974731449503452" y="2.000000000479304" width="4" height="2"/>
  <rect x="17.974731449503452" y="2.000000000479304" width="4" height="2"/>
  <rect x="1.974731449503452" y="8.000000000480213" width="4" height="2"/>
  <rect x="9.974731449503452" y="8.000000000480213" width="4" height="2"/>
  <rect x="17.974731449503452" y="8.000000000480213" width="4" height="2"/>
  <rect x="1.974731449503452" y="14.000000000480213" width="4" height="2"/>
  <rect x="9.974731449503452" y="14.000000000480213" width="4" height="2"/>
  <rect x="9.974731449503452" y="20.000000000480213" width="4" height="2"/>
  <rect x="17.974731449503452" y="14.000000000480213" width="4" height="2"/>
</svg>
