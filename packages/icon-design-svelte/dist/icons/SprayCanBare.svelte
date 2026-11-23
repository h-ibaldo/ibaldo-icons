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
  <path d="M11 5L14 5C15.656 5 17 6.344 17 8L17 22L8 22L8 8C8 6.344 9.344 5 11 5Z"/>
  <path d="M11 5L11 2L14 2L14 5"/>
  <path d="M7 9L18 9"/>
  <path d="M8 13L14 13L14 18L8 18Z"/>
</svg>
