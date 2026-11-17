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
  <path d="M16 5L16 13.5C16 15.984 13.984 18 11.5 18C9.016 18 7 15.984 7 13.5L7 5C7 3.344 8.344 2 10 2C11.656 2 13 3.344 13 5L13 11.5C13 12.328 12.328 13 11.5 13C10.672 13 10 12.328 10 11.5L10 6"/>
  <path d="M7 5L5 5C3.344 5 2 6.344 2 8L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 8C22 6.344 20.656 5 19 5L16 5"/>
</svg>
