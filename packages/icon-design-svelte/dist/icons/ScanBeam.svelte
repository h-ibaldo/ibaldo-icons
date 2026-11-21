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
  <path d="M2 7L2 3C2 2.449 2.445 2 3 2L7 2"/>
  <path d="M22 7L22 3C22 2.449 21.555 2 21 2L17 2"/>
  <path d="M2 17L2 21C2 21.551 2.445 22 3 22L7 22"/>
  <path d="M22 17L22 21C22 21.551 21.555 22 21 22L17 22"/>
  <path d="M2 12L22 12"/>
</svg>
