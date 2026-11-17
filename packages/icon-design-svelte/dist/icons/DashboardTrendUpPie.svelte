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
  <path d="M14 16C14 12.688 11.313 10 8 10C4.688 10 2 12.688 2 16C2 19.313 4.688 22 8 22C11.313 22 14 19.313 14 16Z"/>
  <path d="M8 10L8 16L14 16"/>
  <path d="M18 12L22 12"/>
  <path d="M18 16L22 16"/>
  <path d="M18 20L22 20"/>
  <path d="M2 7L10 3L17 7L22 2"/>
  <path d="M18 2L22 2L22 6"/>
</svg>
