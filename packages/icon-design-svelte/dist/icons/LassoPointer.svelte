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
  <path d="M15 19L14 10L22 15L17 15Z"/>
  <path d="M5 16C5 17.105 5.895 18 7 18C8.105 18 9 17.105 9 16C9 14.895 8.105 14 7 14C5.895 14 5 14.895 5 16Z"/>
  <path d="M6 18C6 18 6.945 22 11 22"/>
  <path d="M12 17C10.918 17 9.875 16.871 8.898 16.633"/>
  <path d="M5.25 15.031C3.254 13.66 2 11.691 2 9.5C2 5.359 6.477 2 12 2C17.523 2 22 5.359 22 9.5C22 10.012 21.93 10.516 21.801 11"/>
</svg>
