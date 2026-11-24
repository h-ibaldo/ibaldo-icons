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
  <polyline points="2 2 2 22 22 22"/>
  <polyline points="5 22 5 13 10 13 10 4 15 4 15 9 20 9 20 22"/>
  <line x1="10" y1="13" x2="10" y2="22"/>
  <line x1="15" y1="9" x2="15" y2="22"/>
</svg>
