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
  <path d="M22 13L19 13"/>
  <path d="M5 13L2 13"/>
  <path d="M19 6L17 8"/>
  <path d="M7 18L5 20"/>
  <path d="M7 8L5 6"/>
  <path d="M22 13C22 7.477 17.523 3 12 3C6.477 3 2 7.477 2 13C2 15.777 3.137 18.293 4.965 20.105L5 20"/>
  <path d="M12 7L9.598 12.609C9.227 13.469 9.348 14.461 9.906 15.211C10.953 16.605 13.047 16.605 14.094 15.211C14.652 14.461 14.773 13.469 14.402 12.609Z"/>
</svg>
