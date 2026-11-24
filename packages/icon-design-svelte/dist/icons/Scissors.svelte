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
  <path d="M9.598 7.5C8.77 8.938 6.934 9.426 5.5 8.598C4.066 7.77 3.574 5.938 4.402 4.5C5.23 3.066 7.066 2.574 8.5 3.402C9.934 4.23 10.426 6.066 9.598 7.5Z"/>
  <path d="M9.598 16.098C8.77 14.664 6.934 14.172 5.5 15C4.066 15.828 3.574 17.664 4.402 19.098C5.23 20.535 7.066 21.023 8.5 20.195C9.934 19.367 10.426 17.535 9.598 16.098Z"/>
  <path d="M5.5 15L21.09 6"/>
  <path d="M21.09 17.598L14.027 13.52"/>
  <path d="M11.043 11.801L5.5 8.598"/>
</svg>
