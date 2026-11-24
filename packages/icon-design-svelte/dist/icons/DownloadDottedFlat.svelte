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
  <polyline points="16.974731450032778 12.00000000113414 11.974731449356113 17.000000000462023 6.974731450032778 11.999999999786269"/>
  <line x1="11.974731451105981" y1="10.000000000462023" x2="11.974731449356113" y2="17.000000000462023"/>
  <line x1="11.974731451105981" y1="6.010000000462242" x2="11.974731451105981" y2="6.000000000462023"/>
  <line x1="11.974731451105981" y1="2.010000000462242" x2="11.974731451105981" y2="2.000000000462023"/>
  <line x1="2.974731450032778" y1="22.000000000462933" x2="20.974731450032778" y2="22.000000000462933"/>
</svg>
