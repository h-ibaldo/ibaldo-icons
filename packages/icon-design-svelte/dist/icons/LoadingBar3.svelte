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
  <rect x="1.974731449503452" y="8.000000000480213" width="20" height="8"/>
  <line x1="1.974731449503452" y1="16.000000000480213" x2="9.974731449503452" y2="8.000000000480213"/>
  <line x1="1.974731449503452" y1="12.000000000480213" x2="5.974731449503452" y2="8.000000000480213"/>
  <line x1="5.974731449503452" y1="16.000000000480213" x2="13.974731449503452" y2="8.000000000480213"/>
  <line x1="9.974731449503452" y1="16.000000000480213" x2="13.974731449503452" y2="12.000000000480213"/>
  <line x1="13.974731449503452" y1="8.000000000480213" x2="13.974731449503452" y2="16.000000000480213"/>
</svg>
