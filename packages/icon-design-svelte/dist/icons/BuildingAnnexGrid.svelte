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
  <path d="M16 3L2 3L2 22L16 22Z"/>
  <path d="M16 22L22 22L22 8L16 8"/>
  <path d="M7 8L6 8L6 7L7 7Z"/>
  <path d="M12 8L11 8L11 7L12 7Z"/>
  <path d="M7 13L6 13L6 12L7 12Z"/>
  <path d="M12 13L11 13L11 12L12 12Z"/>
  <path d="M7 18L6 18L6 17L7 17Z"/>
  <path d="M12 18L11 18L11 17L12 17Z"/>
  <path d="M18 13L17 13L17 12L18 12Z"/>
  <path d="M18 18L17 18L17 17L18 17Z"/>
</svg>
