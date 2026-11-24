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
  <path d="M20 17L4 17C2.895 17 2 16.105 2 15L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 15C22 16.105 21.105 17 20 17Z"/>
  <path d="M12 4L12 2"/>
  <path d="M12 22L12 17"/>
  <path d="M17 22L7 22"/>
  <path d="M7 13L7 11"/>
  <path d="M12 13L12 8"/>
  <path d="M17 13L17 9"/>
</svg>
