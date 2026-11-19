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
  <path d="M9 22L7 22C6.448 22 6 21.552 6 21L6 7C6 6.448 6.448 6 7 6L18 6C18.552 6 19 6.448 19 7L19 8"/>
  <path d="M14 2L3 2C2.448 2 2 2.448 2 3L2 18"/>
  <path d="M22 17L17.828 21.172C16.724 22.276 14.933 22.276 13.828 21.172L13.828 21.172C12.724 20.067 12.724 18.276 13.828 17.172L19.586 11.414C20.138 10.862 21.034 10.862 21.586 11.414L21.586 11.414C22.138 11.966 22.138 12.862 21.586 13.414L17 18"/>
</svg>
