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
  <path d="M12.242 19.758L11.242 20.758C9.586 22.414 6.898 22.414 5.242 20.758C3.586 19.102 3.586 16.414 5.242 14.758L14.758 5.242C16.414 3.586 19.102 3.586 20.758 5.242C22.414 6.898 22.414 9.586 20.758 11.242L16.5 15.5C15.672 16.328 14.328 16.328 13.5 15.5C12.672 14.672 12.672 13.328 13.5 12.5L17 9"/>
  <path d="M8 5L5 2L2 5"/>
  <path d="M5 9L5 2"/>
</svg>
