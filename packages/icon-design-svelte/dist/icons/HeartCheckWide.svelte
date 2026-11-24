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
  <path d="M21.012 12.711C22.434 10.656 22.137 7.77 20.09 6.078C18.098 4.434 15.129 4.73 13.301 6.559L11.949 7.906L10.602 6.559C8.773 4.73 5.805 4.434 3.809 6.078C1.523 7.969 1.402 11.359 3.449 13.406C4.449 14.406 5.527 15.32 6.676 16.141L11.949 19.906"/>
  <path d="M15 18L17 20L21 16"/>
</svg>
