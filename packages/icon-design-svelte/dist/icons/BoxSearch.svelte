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
  <path d="M21 17.5C21 19.434 19.434 21 17.5 21C15.566 21 14 19.434 14 17.5C14 15.566 15.566 14 17.5 14C19.434 14 21 15.566 21 17.5Z"/>
  <path d="M19.973 19.973L22 22"/>
  <path d="M7 4.5L17 9.5"/>
  <path d="M2 7L12 12L22 7"/>
  <path d="M12 14L12 12"/>
  <path d="M12 22L12 21"/>
  <path d="M12 22L2 17L2 7L12 2L22 7L22 12"/>
</svg>
