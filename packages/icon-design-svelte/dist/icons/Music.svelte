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
  <ellipse cx="5.5" cy="18.999999999998181" rx="3.5" ry="3"/>
  <ellipse cx="18.5" cy="16.999999999998181" rx="3.5" ry="3"/>
  <polyline points="9 18.999999999998181 9 3.999999999998181 22 1.999999999998181 22 16.999999999998181"/>
</svg>
