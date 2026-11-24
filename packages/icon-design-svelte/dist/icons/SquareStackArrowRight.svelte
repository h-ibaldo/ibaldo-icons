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
  <path d="M19.898 22L10.102 22C8.941 22 8 21.059 8 19.898L8 10.102C8 8.941 8.941 8 10.102 8L19.898 8C21.059 8 22 8.941 22 10.102L22 19.898C22 21.059 21.059 22 19.898 22Z"/>
  <path d="M17 15L3.949 15C2.871 15 2 14.129 2 13.051L2 3.949C2 2.871 2.871 2 3.949 2L13.051 2C14.129 2 15 2.871 15 3.949L15 8"/>
  <path d="M14 12L17 15L14 18"/>
</svg>
