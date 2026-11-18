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
  <path d="M14 14L15.965 15.965C17.344 17.344 17.344 19.586 15.965 20.965C14.586 22.344 12.344 22.344 10.965 20.965L9 19"/>
  <path d="M6 16L4.035 14.035C2.656 12.652 2.656 10.414 4.035 9.035C5.414 7.652 7.656 7.652 9.035 9.035L11 11"/>
  <path d="M12 17L8 13"/>
  <path d="M20 5L17 2L14 5"/>
  <path d="M17 10L17 2"/>
</svg>
