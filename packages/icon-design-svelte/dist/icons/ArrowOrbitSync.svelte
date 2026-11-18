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
  <path d="M4.93 4.93C8.832 1.023 15.164 1.023 19.07 4.93"/>
  <path d="M19.07 19.07C15.168 22.977 8.836 22.977 4.93 19.07"/>
  <path d="M14 6L12 8L14 10"/>
  <path d="M22 12C22 9.789 17.523 8 12 8"/>
  <path d="M8 8.336C4.469 8.953 2 10.359 2 12"/>
  <path d="M10 18L12 16L10 14"/>
  <path d="M2 12C2 14.211 6.477 16 12 16"/>
  <path d="M16 15.664C19.531 15.047 22 13.641 22 12"/>
</svg>
