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
  <path d="M2.387 7.777C8.238 4.074 15.762 4.074 21.613 7.777"/>
  <path d="M5.59 11.852C9.492 9.383 14.508 9.383 18.41 11.852"/>
  <path d="M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926"/>
  <path d="M12 20L12 20"/>
</svg>
