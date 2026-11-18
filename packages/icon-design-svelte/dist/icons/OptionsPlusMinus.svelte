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
  <path d="M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"/>
  <path d="M19 17L15 17"/>
  <path d="M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z"/>
  <path d="M7 5L7 9"/>
  <path d="M9 7L5 7"/>
</svg>
