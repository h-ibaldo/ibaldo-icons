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
  <path d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"/>
  <path d="M12 2L12 5"/>
  <path d="M12 19L12 22"/>
  <path d="M22 12L19 12"/>
  <path d="M5 12L2 12"/>
  <path d="M19 5L17 7"/>
  <path d="M7 17L5 19"/>
  <path d="M19 19L17 17"/>
  <path d="M7 7L5 5"/>
  <path d="M12 8L10.281 13.16C10.105 13.688 10.184 14.273 10.492 14.738C11.211 15.813 12.789 15.813 13.508 14.738C13.816 14.273 13.895 13.688 13.719 13.16Z"/>
</svg>
