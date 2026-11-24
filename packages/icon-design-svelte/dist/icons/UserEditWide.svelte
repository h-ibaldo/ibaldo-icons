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
  <path d="M21.379 11.621L21.375 11.621C20.547 10.793 19.207 10.793 18.379 11.621L11 19L11 22L14 22L21.379 14.621C22.207 13.793 22.207 12.449 21.379 11.621Z"/>
  <path d="M16.879 13.121L19.879 16.121"/>
  <path d="M6 7C6 4.238 8.238 2 11 2C13.762 2 16 4.238 16 7C16 9.762 13.762 12 11 12C8.238 12 6 9.762 6 7Z"/>
  <path d="M2 22L2 21C2 16.031 6.031 12 11 12C11.902 12 12.773 12.133 13.598 12.379"/>
</svg>
