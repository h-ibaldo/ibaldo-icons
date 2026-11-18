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
  <path d="M6 2L4 4L6 6"/>
  <path d="M11 2L9 4L11 6"/>
  <path d="M12 4C16.973 4 21 8.027 21 13C21 17.973 16.973 22 12 22C7.027 22 3 17.973 3 13C3 11.945 3.191 10.938 3.523 10"/>
  <path d="M12 4L9 4"/>
  <path d="M8 10L9 10L9 17"/>
  <path d="M16 10L13 10L13 13L14 13C15.105 13 16 13.895 16 15C16 16.105 15.105 17 14 17L13 17"/>
</svg>
