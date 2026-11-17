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
  <rect x="2.02526851296625" y="1.99756205212816" width="20.000000000004093" height="20" rx=".999999999997345" ry=".999999999997345" transform="translate(24.050537025330378 23.995124104863933) rotate(-180)"/>
  <line x1="22.025268508705267" y1="17.997562036317504" x2="2.025268508705267" y2="17.997562036317504"/>
  <rect x="6.025268508705267" y="5.997562036317504" width="2" height="2"/>
  <rect x="6.025268508705267" y="11.997562036317504" width="2" height="2"/>
</svg>
