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
  <path d="M12 9L5 6L5 2L19 2L19 6Z"/>
  <path d="M11.98 11L14.172 14.184L18 15.199L15.527 18.188L15.703 22L11.98 20.664L8.262 22L8.438 18.188L5.965 15.199L9.793 14.184Z"/>
</svg>
