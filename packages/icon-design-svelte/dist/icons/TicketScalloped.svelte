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
  <path d="M7 9L7 15"/>
  <path d="M17 9L17 15"/>
  <path d="M2 9C3.656 9 5 7.656 5 6L19 6C19 7.656 20.344 9 22 9L22 15C20.344 15 19 16.344 19 18L5 18C5 16.344 3.656 15 2 15Z"/>
</svg>
