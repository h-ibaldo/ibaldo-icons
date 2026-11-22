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
  <path d="M22 9.641L12 13"/>
  <path d="M18.18 22L12 13"/>
  <path d="M5.82 22L12 13"/>
  <path d="M2 9.641L12 13"/>
  <path d="M12 2L12 13"/>
  <path d="M7 20L4 10L12 4L21 10L16 19Z"/>
</svg>
