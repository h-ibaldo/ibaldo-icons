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
  <path d="M22 22C22 19.789 20.211 18 18 18L16 18C13.789 18 12 19.789 12 22"/>
  <path d="M8 4L14 4"/>
  <path d="M8 9L14 9"/>
  <path d="M3 4L4 4"/>
  <path d="M3 9L4 9"/>
  <path d="M8 14L10 14"/>
  <path d="M3 14L4 14"/>
</svg>
