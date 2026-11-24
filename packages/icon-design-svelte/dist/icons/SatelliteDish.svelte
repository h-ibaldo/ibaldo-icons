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
  <path d="M6 10.223C6 8.121 6.957 6.242 8.457 5L18 14.543C16.758 16.043 14.879 17 12.777 17C9.035 17 6 13.965 6 10.223Z"/>
  <path d="M12 9L13 8C13.551 7.449 14.449 7.449 15 8C15.551 8.551 15.551 9.449 15 10L14 11"/>
  <path d="M14 4.754C16.504 4.754 18.535 6.785 18.535 9.289"/>
  <path d="M14.074 2C18.059 2 21.289 5.23 21.289 9.219"/>
  <path d="M10.074 16.438L13 22L3 22L7.988 15.016"/>
</svg>
