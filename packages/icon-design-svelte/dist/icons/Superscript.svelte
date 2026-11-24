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
  <path d="M2 7L12 22"/>
  <path d="M12 7L2 22"/>
  <path d="M16 4.027C16 2.906 16.906 2 18.027 2L18.973 2C20.094 2 21 2.906 21 4.027C21 4.641 20.719 5.223 20.238 5.609L17.563 7.75C16.574 8.539 16 9.734 16 11L21 11"/>
</svg>
