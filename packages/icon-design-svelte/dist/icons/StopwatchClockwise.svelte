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
  <path d="M5 5L3 7"/>
  <path d="M19 5L21 7"/>
  <path d="M10 3L14 3"/>
  <path d="M12 3L12 6"/>
  <path d="M4 21L4 17L8 17"/>
  <path d="M5.07 18C6.453 20.391 9.039 22 12 22C16.418 22 20 18.418 20 14C20 9.582 16.418 6 12 6C7.922 6 4.563 9.055 4.07 13"/>
  <path d="M12 10L12 14"/>
</svg>
