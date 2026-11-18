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
  <path d="M19.88 14.464A9 9 0 1 1 9.536 4.12"/>
  <path d="M19.88 14.464A8 8 0 0 1 9.536 4.12"/>
  <path d="M14.5 7L18.5 7L14.5 11.5L18.5 11.5"/>
  <path d="M19.5 2.5L22 2.5L19.5 5L22 5"/>
</svg>
