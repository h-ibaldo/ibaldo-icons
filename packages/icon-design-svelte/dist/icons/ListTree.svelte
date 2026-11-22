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
  <path d="M6 4L22 4"/>
  <path d="M12 12L22 12"/>
  <path d="M2 8L2 17C2 18.656 3.344 20 5 20L8 20"/>
  <path d="M2 4L2 9C2 10.656 3.344 12 5 12L8 12"/>
  <path d="M12 20L22 20"/>
</svg>
