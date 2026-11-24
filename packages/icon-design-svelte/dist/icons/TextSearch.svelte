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
  <path d="M22.027 5L2 5"/>
  <path d="M9 12L2 12"/>
  <path d="M9 19L2 19"/>
  <path d="M20 15.5C20 17.434 18.434 19 16.5 19C14.566 19 13 17.434 13 15.5C13 13.566 14.566 12 16.5 12C18.434 12 20 13.566 20 15.5Z"/>
  <path d="M18.973 17.973L21 20"/>
</svg>
