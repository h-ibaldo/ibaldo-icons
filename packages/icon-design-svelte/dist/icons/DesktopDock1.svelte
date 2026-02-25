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
  <rect x="2.05053704756574" y="3.99756205113863" width="20" height="16" rx="1.99999999997484" ry="1.99999999997484" transform="translate(24.101074094525881 23.995124102885534) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="6.050537043305667 19.997562035327974 6.050537043305667 14.997562035327974 18.050537043305667 14.997562035327974 18.050537043305667 19.997562035327974" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.050537043305667" y1="14.997562035327974" x2="10.050537043305667" y2="19.997562035327974" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="14.050537043305667" y1="14.997562035327974" x2="14.050537043305667" y2="19.997562035327974" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
