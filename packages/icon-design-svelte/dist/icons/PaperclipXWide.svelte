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
  <path d="M10 2L3.863 8.137C1.379 10.621 1.379 14.648 3.863 17.133L3.867 17.137C6.352 19.621 10.379 19.621 12.863 17.137L20.758 9.242C22.414 7.586 22.414 4.902 20.758 3.246L20.754 3.242C19.098 1.586 16.414 1.586 14.758 3.242L7.121 10.879C6.293 11.707 6.293 13.051 7.121 13.879C7.949 14.707 9.293 14.707 10.121 13.879L16 8"/>
  <path d="M22 22L18 18"/>
  <path d="M22 18L18 22"/>
</svg>
