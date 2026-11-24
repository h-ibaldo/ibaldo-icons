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
  <path d="M20 3L15 3L15 2L9 2L9 3L4 3"/>
  <path d="M5 3L5 22L19 22L19 3"/>
  <path d="M10 8L9 8L9 7L10 7Z"/>
  <path d="M15 8L14 8L14 7L15 7Z"/>
  <path d="M10 13L9 13L9 12L10 12Z"/>
  <path d="M15 13L14 13L14 12L15 12Z"/>
  <path d="M10 18L9 18L9 17L10 17Z"/>
  <path d="M15 18L14 18L14 17L15 17Z"/>
</svg>
