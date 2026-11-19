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
  <path d="M21 20L21 7.828C21 7.298 20.789 6.789 20.414 6.414L16.586 2.586C16.211 2.211 15.702 2 15.172 2L5.172 2C4.067 2 3.172 2.895 3.172 4L3.172 20C3.172 21.105 4.067 22 5.172 22L19 22C20.105 22 21 21.105 21 20Z"/>
  <path d="M11 10L7 10L7 6L11 6L11 10Z"/>
  <path d="M15 10L17 10"/>
  <path d="M7 14L17 14"/>
  <path d="M7 18L17 18"/>
</svg>
