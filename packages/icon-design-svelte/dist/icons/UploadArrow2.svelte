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
  <polyline points="6.97473145017193 7.999999999336069 11.974731451296975 3.000000000462023 16.97473145017193 8.000000001585249" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.974731448378407" y1="16.000000000462023" x2="11.974731451296975" y2="3.000000000462023" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.974731450037325" y1="21.000000000462933" x2="20.974731450037325" y2="21.000000000462933" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
