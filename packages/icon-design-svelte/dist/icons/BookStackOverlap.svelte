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
  <path d="M22 10L12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14L22 14"/>
  <path d="M22 10L22 2L12 2C10.895 2 10 2.895 10 4"/>
  <path d="M10 4L10 12"/>
  <path d="M14 18L4 18C2.895 18 2 18.895 2 20C2 21.105 2.895 22 4 22L14 22"/>
  <path d="M14 18L14 17.07"/>
  <path d="M7 10L4 10C2.895 10 2 10.895 2 12"/>
  <path d="M2 12L2 20"/>
</svg>
