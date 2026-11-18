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
  <path d="M7 4L14 4"/>
  <path d="M7 12L14 12"/>
  <path d="M7 20L14 20"/>
  <path d="M2 4L3 4"/>
  <path d="M2 12L3 12"/>
  <path d="M7 8L14 8"/>
  <path d="M2 8L3 8"/>
  <path d="M2 20L3 20"/>
  <path d="M7 16L14 16"/>
  <path d="M22 4L22 4"/>
  <path d="M22 12L22 12"/>
  <path d="M22 20L22 20"/>
  <path d="M22 8L22 8"/>
  <path d="M22 16L22 16"/>
  <path d="M19 4L19 4"/>
  <path d="M19 12L19 12"/>
  <path d="M19 16L19 16"/>
  <path d="M2 16L3 16"/>
</svg>
