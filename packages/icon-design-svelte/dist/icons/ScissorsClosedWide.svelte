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
  <path d="M7.598 11.5C6.77 12.938 4.938 13.426 3.5 12.598C2.066 11.77 1.574 9.938 2.402 8.5C3.23 7.066 5.066 6.574 6.5 7.402C7.938 8.23 8.426 10.066 7.598 11.5Z"/>
  <path d="M8.676 14.961L3.703 12.707L7.535 16"/>
  <path d="M12.113 11.828L7.535 16L11.402 16L22 11.195L18.754 10.27C16.422 9.602 13.91 10.191 12.113 11.828Z"/>
</svg>
