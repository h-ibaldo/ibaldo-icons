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
  <path d="M3.242 3.246L3.246 3.242C4.902 1.586 7.586 1.586 9.242 3.242L11 5C12.656 6.656 12.656 9.34 11 10.996L10.996 11C9.34 12.656 6.656 12.656 5 11L3.242 9.242C1.586 7.586 1.586 4.902 3.242 3.246Z"/>
  <path d="M13 13.004L13.004 13C14.66 11.344 17.344 11.344 19 13L20.758 14.758C22.414 16.414 22.414 19.098 20.758 20.754L20.754 20.758C19.098 22.414 16.414 22.414 14.758 20.758L13 19C11.344 17.344 11.344 14.66 13 13.004Z"/>
  <path d="M8 8L16 16"/>
  <path d="M22.004 4L20.004 2L18.004 4"/>
  <path d="M20.004 8L20.004 2"/>
</svg>
