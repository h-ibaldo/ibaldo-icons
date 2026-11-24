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
  <path d="M17 2L7 22"/>
  <path d="M15 6L6.5 6C4.016 6 2 8.016 2 10.5C2 12.984 4.016 15 6.5 15L10.5 15"/>
  <path d="M9 18L17.5 18C19.984 18 22 15.984 22 13.5C22 11.016 19.984 9 17.5 9L13.5 9"/>
</svg>
