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
  <path d="M7 2L4 5L7 8"/>
  <path d="M12 5C16.418 5 20 8.582 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13"/>
  <path d="M4 5L12 5"/>
  <path d="M12 13L12 13"/>
  <path d="M12 9L12 9"/>
  <path d="M12 17L12 17"/>
  <path d="M8.535 11L8.535 11"/>
  <path d="M15.465 15L15.465 15"/>
  <path d="M8.535 15L8.535 15"/>
  <path d="M15.465 11L15.465 11"/>
</svg>
