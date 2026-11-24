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
  <path d="M2 18L2 6C2 4.895 2.895 4 4 4L16 4"/>
  <path d="M22 7L22 20C22 21.105 21.105 22 20 22L6 22"/>
  <path d="M8 2L8 6"/>
  <path d="M16 2L16 4"/>
  <path d="M18.031 10L22 10"/>
  <path d="M2 10L10 10"/>
  <path d="M2 22L22 2"/>
</svg>
