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
  <path d="M13.145 13.145L16 12L13.145 10.855L12 8L10.859 10.855L8 12L10.859 13.145L12 16Z"/>
  <path d="M12 2L12 4"/>
  <path d="M12 20L12 22"/>
  <path d="M22 12L20 12"/>
  <path d="M4 12L2 12"/>
  <path d="M4.93 4.93L6.344 6.344"/>
  <path d="M17.656 17.656L19.07 19.07"/>
  <path d="M19.07 4.93L17.656 6.344"/>
  <path d="M6.344 17.656L4.93 19.07"/>
</svg>
