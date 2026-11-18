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
  <path d="M21.5 13.492A9.564 9.564 0 0 1 7.304 20.231"/>
  <path d="M3.769 16.696A9.564 9.564 0 0 1 10.508 2.5"/>
  <path d="M21.5 13.492A8.501 8.501 0 0 1 14.462 13.074"/>
  <path d="M10.926 9.538A8.501 8.501 0 0 1 10.508 2.5"/>
  <path d="M21 3L3 21"/>
</svg>
