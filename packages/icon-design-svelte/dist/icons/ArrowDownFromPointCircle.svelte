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
  <path d="M15 19L12 22L9 19"/>
  <path d="M12 13L12 22"/>
  <path d="M12 9L12 9"/>
  <path d="M19 19.117C20.848 17.305 22 14.793 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 14.793 3.152 17.305 5 19.117"/>
</svg>
