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
  <line x1="7.974731450043691" y1="8.000000000481123" x2="7.974731450043691" y2="10.000000000481123"/>
  <rect x="1.974731450043691" y="2.000000000479304" width="20" height="20" rx="3" ry="3"/>
  <polyline points="3.283752446137441 21.476379395012373 11.974731450043691 17.000000000481123 11.974731450043691 2.000000000481123"/>
</svg>
