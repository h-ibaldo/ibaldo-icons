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
  <path d="M2 20L22 20L22 4L2 4Z"/>
  <path d="M17 20C17 17.238 19.238 15 22 15"/>
  <path d="M2 9C4.762 9 7 6.762 7 4"/>
  <path d="M15 12C15 14.211 13.656 16 12 16C10.344 16 9 14.211 9 12C9 9.789 10.344 8 12 8C13.656 8 15 9.789 15 12Z"/>
  <path d="M19 10L19 7L18 7"/>
  <path d="M6 17L6 14L5 14"/>
</svg>
