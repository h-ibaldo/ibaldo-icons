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
  <polygon points="21.974731450043691 19.000000000481123 11.974731450043691 22.000000000481123 11.974731450043691 2.000000000481123 21.974731450043691 5.000000000481123 21.974731450043691 19.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="15.974731450043691" y1="10.000000000481123" x2="15.974731450043691" y2="14.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="5.974731450043691 7.000000000479304 5.974731450041872 4.000000000481123 8.974731450043691 4.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="8.974731450043691 20.000000000481123 5.974731450041872 20.000000000481123 5.974731450041872 17.000000000479304" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="3.974731450043691 14.000000000481123 1.974731450043691 12.000000000481123 3.974731450043691 10.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.974731450043691" y1="12.000000000481123" x2="1.974731450043691" y2="12.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
