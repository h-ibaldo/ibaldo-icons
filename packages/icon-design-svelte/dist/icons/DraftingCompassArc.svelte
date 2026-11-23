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
  <path d="M9 5C9 3.344 10.344 2 12 2C13.656 2 15 3.344 15 5C15 6.656 13.656 8 12 8C10.344 8 9 6.656 9 5Z"/>
  <path d="M20 13.945C17.875 15.844 15.074 17 12 17C8.926 17 6.125 15.844 4 13.945"/>
  <path d="M13.402 7.652L17.617 15.609"/>
  <path d="M19.02 18.258L21 22"/>
  <path d="M3 22L10.598 7.652"/>
</svg>
