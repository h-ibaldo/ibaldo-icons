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
  <path d="M22 6L18 2"/>
  <path d="M18 6L22 2"/>
  <path d="M7 11L10 8L13 11"/>
  <path d="M10 8L10 12.5C10 14.434 11.566 16 13.5 16C15.434 16 17 14.434 17 12.5L17 12"/>
  <path d="M21.793 10C21.926 10.648 22 11.313 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C12.688 2 13.352 2.074 14 2.207"/>
</svg>
