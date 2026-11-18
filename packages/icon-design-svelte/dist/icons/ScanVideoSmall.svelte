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
  <path d="M2 7L2 5C2 3.344 3.344 2 5 2L7 2"/>
  <path d="M22 7L22 5C22 3.344 20.656 2 19 2L17 2"/>
  <path d="M2 17L2 19C2 20.656 3.344 22 5 22L7 22"/>
  <path d="M22 17L22 19C22 20.656 20.656 22 19 22L17 22"/>
  <path d="M12 15L8 15C7.449 15 7 14.551 7 14L7 10C7 9.449 7.449 9 8 9L12 9C12.551 9 13 9.449 13 10L13 14C13 14.551 12.551 15 12 15Z"/>
  <path d="M13 11L16 9L17 9L17 15L16 15L13 13"/>
</svg>
