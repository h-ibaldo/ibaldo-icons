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
  <path d="M7.598 10.5C6.77 11.938 4.934 12.426 3.5 11.598C2.066 10.77 1.574 8.938 2.402 7.5C3.23 6.066 5.066 5.574 6.5 6.402C7.934 7.23 8.426 9.066 7.598 10.5Z"/>
  <path d="M3.5 11.598L9 15"/>
  <path d="M9 15L19.09 9"/>
</svg>
