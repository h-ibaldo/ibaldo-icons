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
  <polygon points="19.974731450043691 19.000000000481123 9.974731450043691 22.000000000481123 9.974731450043691 2.000000000481123 19.974731450043691 5.000000000481123 19.974731450043691 19.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="6.974731450043691 20.000000000481123 3.974731450043691 20.000000000481123 3.974731450043691 4.000000000481123 6.974731450043691 4.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="13.974731450043691" y1="10.000000000481123" x2="13.974731450043691" y2="14.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
