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
  <path d="M20 15C20 16.656 18.656 18 17 18C15.344 18 14 16.656 14 15C14 13.344 15.344 12 17 12C18.656 12 20 13.344 20 15Z"/>
  <path d="M22 22L22 20C22 18.895 21.105 18 20 18L14 18C12.895 18 12 18.895 12 20L12 22"/>
  <path d="M8 4L14 4"/>
  <path d="M8 9L14 9"/>
  <path d="M5 3L3 5L2 4"/>
  <path d="M5 8L3 10L2 9"/>
  <path d="M5 13L3 15L2 14"/>
  <path d="M8 14L10 14"/>
</svg>
