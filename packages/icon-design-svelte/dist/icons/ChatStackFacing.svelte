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
  <path d="M2.105 4L2.105 18L7.105 14L16.105 14C17.211 14 18.105 13.105 18.105 12L18.105 4C18.105 2.895 17.211 2 16.105 2L4.105 2C3.004 2 2.105 2.895 2.105 4Z"/>
  <path d="M8.105 17C8.105 18.105 9.004 19 10.105 19L17.105 19L22.105 22L22.105 10.414C22.105 9.508 21.746 8.641 21.105 8"/>
</svg>
