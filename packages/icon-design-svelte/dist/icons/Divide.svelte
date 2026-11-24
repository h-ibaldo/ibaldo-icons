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
  <path d="M13 6C13 6.555 12.551 7 12 7C11.449 7 11 6.555 11 6C11 5.445 11.449 5 12 5C12.551 5 13 5.445 13 6Z"/>
  <path d="M13 18C13 18.555 12.551 19 12 19C11.449 19 11 18.555 11 18C11 17.445 11.449 17 12 17C12.551 17 13 17.445 13 18Z"/>
  <path d="M5 12L19 12"/>
</svg>
