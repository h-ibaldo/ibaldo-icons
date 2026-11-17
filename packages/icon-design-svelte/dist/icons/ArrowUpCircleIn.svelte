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
  <path d="M9 12L12 9L15 12"/>
  <path d="M12 22L12 9"/>
  <path d="M17 20.648C19.984 18.918 22 15.699 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 15.699 4.016 18.918 7 20.648"/>
</svg>
