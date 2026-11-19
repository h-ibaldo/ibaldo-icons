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
  <path d="M20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12Z"/>
  <path d="M8.8 12C8.8 15.274 10.06 18.172 12 20C13.94 18.172 15.2 15.274 15.2 12C15.2 8.726 13.94 5.828 12 4C10.06 5.828 8.8 8.726 8.8 12Z"/>
  <path d="M4 12L20 12"/>
  <path d="M19 2L20 2C21.105 2 22 2.895 22 4L22 5"/>
  <path d="M22 19L22 20C22 21.105 21.105 22 20 22L19 22"/>
  <path d="M5 22L4 22C2.895 22 2 21.105 2 20L2 19"/>
  <path d="M2 5L2 4C2 2.895 2.895 2 4 2L5 2"/>
</svg>
