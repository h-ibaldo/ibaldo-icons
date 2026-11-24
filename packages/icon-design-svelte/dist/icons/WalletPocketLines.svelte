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
  <path d="M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z"/>
  <path d="M2 14L7.5 14C8.328 14 9 14.672 9 15.5C9 16.328 9.672 17 10.5 17L13.5 17C14.328 17 15 16.328 15 15.5C15 14.672 15.672 14 16.5 14L22 14"/>
  <path d="M2 10L22 10"/>
  <path d="M2 6L22 6"/>
</svg>
