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
  <path d="M21 10.5C21 12.434 19.434 14 17.5 14C15.566 14 14 12.434 14 10.5C14 8.566 15.566 7 17.5 7C19.434 7 21 8.566 21 10.5Z"/>
  <path d="M19.977 12.973L22 15"/>
  <path d="M18.594 4C17.539 3.367 16.316 3 15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C15.34 17 15.672 16.969 16 16.922"/>
</svg>
