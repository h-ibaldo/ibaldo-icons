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
  <path d="M2 2L12 17"/>
  <path d="M12 2L2 17"/>
  <path d="M16 15.027C16 13.906 16.906 13 18.027 13L18.973 13C20.094 13 21 13.906 21 15.027C21 15.641 20.719 16.223 20.238 16.609L17.563 18.75C16.574 19.539 16 20.734 16 22L21 22"/>
</svg>
