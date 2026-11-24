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
  <path d="M16 7C16 5.344 17.344 4 19 4C20.656 4 22 5.344 22 7C22 8.656 20.656 10 19 10C17.344 10 16 8.656 16 7Z"/>
  <path d="M2 18C2 16.344 3.344 15 5 15C6.656 15 8 16.344 8 18C8 19.656 6.656 21 5 21C3.344 21 2 19.656 2 18Z"/>
  <path d="M19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22C17.344 22 16 20.656 16 19C16 17.344 17.344 16 19 16Z"/>
  <path d="M7 2C8.656 2 10 3.344 10 5C10 6.656 8.656 8 7 8C5.344 8 4 6.656 4 5C4 3.344 5.344 2 7 2Z"/>
  <path d="M10 5L16 7"/>
  <path d="M8 18L16 19"/>
  <path d="M10 5L16 7"/>
  <path d="M19 10L19 16"/>
  <path d="M8 18L16 19"/>
  <path d="M7 8L5 15"/>
</svg>
