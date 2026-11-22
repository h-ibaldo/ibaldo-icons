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
  <path d="M21.234 6.234L17.762 2.762C17.352 2.352 16.676 2.379 16.297 2.82L11.953 7.887C11.688 8.195 11.273 8.297 10.883 8.188C8.512 7.535 5.867 8.133 4 10L14 20C15.867 18.133 16.465 15.488 15.813 13.117C15.703 12.727 15.805 12.309 16.109 12.047L21.18 7.703C21.621 7.324 21.648 6.648 21.234 6.234Z"/>
  <path d="M2 22L9 15"/>
</svg>
