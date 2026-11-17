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
  <path d="M16 21L21 21"/>
  <path d="M10 3L3.863 9.137C1.379 11.621 1.379 15.648 3.863 18.133L3.867 18.137C6.352 20.621 10.379 20.621 12.863 18.137L20.758 10.242C22.414 8.586 22.414 5.902 20.758 4.246L20.754 4.242C19.098 2.586 16.414 2.586 14.758 4.242L7.121 11.879C6.293 12.707 6.293 14.051 7.121 14.879C7.949 15.707 9.293 15.707 10.121 14.879L16 9"/>
</svg>
