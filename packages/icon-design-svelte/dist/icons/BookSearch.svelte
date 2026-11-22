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
  <path d="M19 17L7 17C5.895 17 5 17.895 5 19C5 20.105 5.895 21 7 21L19 21"/>
  <path d="M19 17L19 3L7 3C5.895 3 5 3.895 5 5"/>
  <path d="M5 5L5 19"/>
  <path d="M15 9.5C15 11.434 13.434 13 11.5 13C9.566 13 8 11.434 8 9.5C8 7.566 9.566 6 11.5 6C13.434 6 15 7.566 15 9.5Z"/>
  <path d="M13.973 11.973L16 14"/>
</svg>
