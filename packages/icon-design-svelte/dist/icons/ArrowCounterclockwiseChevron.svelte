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
  <path d="M9 2L6 5L9 8"/>
  <path d="M12.5 5C17.195 5 21 8.805 21 13.5C21 18.195 17.195 22 12.5 22C7.805 22 4 18.195 4 13.5C4 12.504 4.18 11.555 4.492 10.668"/>
  <path d="M12.5 5L6 5"/>
</svg>
