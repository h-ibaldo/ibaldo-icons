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
  <rect x="2.050537039341634" y="2.99756204273308" width="20" height="18.000000000400178" rx="1.999999999994095" ry="1.999999999994095" transform="translate(24.101074078167692 23.995124086384191) rotate(-180)"/>
  <polygon points="10.050537043445729 15.997562036226554 6.050537043445729 11.997562036226554 10.050537043445729 7.997562036226554 10.050537043445729 15.997562036226554"/>
  <polygon points="14.050537043576696 15.997562036292038 18.050537043445729 11.997562036157433 14.050537043305667 7.997562036292038 14.050537043576696 15.997562036292038"/>
</svg>
