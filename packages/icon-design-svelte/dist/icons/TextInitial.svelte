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
  <path d="M2 19L22.027 19"/>
  <path d="M14 12L22.027 12"/>
  <path d="M14 5L22.027 5"/>
  <path d="M2 12L4.605 5.918C4.844 5.363 5.395 5 6 5C6.605 5 7.156 5.363 7.395 5.918L10 12"/>
  <path d="M3 10L9 10"/>
</svg>
