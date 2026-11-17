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
  <path d="M12 9L9 12L12 15"/>
  <path d="M22 12L9 12"/>
  <path d="M20.648 17C18.918 19.984 15.699 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C15.699 2 18.918 4.016 20.648 7"/>
</svg>
