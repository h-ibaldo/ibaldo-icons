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
  <path d="M8.5 9.5C8.5 7.566 10.066 6 12 6C13.934 6 15.5 7.566 15.5 9.5C15.5 11.434 13.934 13 12 13C10.066 13 8.5 11.434 8.5 9.5Z"/>
  <path d="M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"/>
  <path d="M5.047 19.188C5.449 15.703 8.41 13 12 13C15.59 13 18.551 15.703 18.953 19.188"/>
</svg>
