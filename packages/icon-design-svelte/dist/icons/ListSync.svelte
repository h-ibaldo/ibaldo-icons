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
  <path d="M22.039 11L22.039 14L19.039 14"/>
  <path d="M12.039 21L12.039 18L15.039 18"/>
  <path d="M21.617 18C20.848 19.766 19.09 21 17.039 21C14.992 21 13.234 19.766 12.465 18"/>
  <path d="M12.473 14C13.246 12.238 14.992 11 17.039 11C19.09 11 20.848 12.234 21.617 14"/>
  <path d="M2 4L21 4"/>
  <path d="M2 12L8 12"/>
  <path d="M2 20L8 20"/>
</svg>
