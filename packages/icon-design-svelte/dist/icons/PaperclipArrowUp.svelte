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
  <path d="M15 8L9 14C8.172 14.828 8.172 16.172 9 16.996L9.004 17C9.828 17.828 11.172 17.828 12 17L19.758 9.242C21.414 7.586 21.414 4.898 19.758 3.242C18.102 1.586 15.414 1.586 13.758 3.242L5.863 11.137C3.379 13.621 3.379 17.648 5.863 20.133L5.867 20.137C8.352 22.621 12.379 22.621 14.863 20.137L21 14"/>
  <path d="M6 4L4 2L2 4"/>
  <path d="M4 8L4 2"/>
</svg>
