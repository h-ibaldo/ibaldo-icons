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
  <path d="M10 6L4.863 11.137C2.379 13.621 2.379 17.648 4.863 20.133L4.867 20.137C7.352 22.621 11.379 22.621 13.863 20.137L20.758 13.242C22.414 11.586 22.414 8.902 20.758 7.246L20.754 7.242C19.098 5.586 16.414 5.586 14.758 7.242L8.121 13.879C7.293 14.707 7.293 16.051 8.121 16.879C8.949 17.707 10.293 17.707 11.121 16.879L16 12"/>
  <path d="M2 4L4 6L8 2"/>
</svg>
