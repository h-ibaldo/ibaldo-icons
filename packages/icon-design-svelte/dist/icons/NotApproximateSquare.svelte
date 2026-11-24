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
  <path d="M7 9.918L7.434 9.594C8.824 8.551 10.77 8.688 12 9.918C13.23 11.148 15.176 11.285 16.566 10.242L17 9.918"/>
  <path d="M7 14.516L7.434 14.188C8.824 13.145 10.77 13.285 12 14.516C13.23 15.742 15.176 15.883 16.566 14.84L17 14.516"/>
  <path d="M9.145 17L14.855 7"/>
  <path d="M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z"/>
</svg>
