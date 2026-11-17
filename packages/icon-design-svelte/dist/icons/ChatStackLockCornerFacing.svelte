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
  <path d="M22 12L14 12L14 7L22 7Z"/>
  <path d="M15 7L15 5C15 3.344 16.344 2 18 2C19.656 2 21 3.344 21 5L21 7"/>
  <path d="M12 2L4 2C2.895 2 2 2.895 2 4L2 17L7 13L10 13"/>
  <path d="M22 16L22 22L17 18L10 18C8.895 18 8 17.105 8 16"/>
</svg>
