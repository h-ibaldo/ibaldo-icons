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
  <polygon points="21.974731450043691 19.000000000481123 11.974731450043691 22.000000000481123 11.974731450043691 2.000000000481123 21.974731450043691 5.000000000481123 21.974731450043691 19.000000000481123"/>
  <line x1="15.974731450043691" y1="10.000000000481123" x2="15.974731450043691" y2="14.000000000481123"/>
  <polyline points="5.974731450043691 6.000000000481123 5.974731450043691 4.000000000481123 8.974731450043691 4.000000000481123"/>
  <polyline points="8.974731450043691 20.000000000481123 5.974731450043691 20.000000000481123 5.974731450043691 18.000000000481123"/>
  <line x1="1.974731450043691" y1="14.000000000479304" x2="5.974731450043691" y2="10.000000000479304"/>
  <line x1="5.974731450043691" y1="14.000000000479304" x2="1.974731450043691" y2="10.000000000479304"/>
</svg>
