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
  <rect x="1.974731444101053" y="7.99999999557258" width="20" height="7.999999999996362" rx="1" ry="1"/>
  <line x1="13.974731444101053" y1="7.999999995576218" x2="13.974731444101053" y2="15.999999995568942"/>
  <line x1="17.964731444100835" y1="11.99999999557258" x2="17.974731444101053" y2="11.99999999557258"/>
</svg>
