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
  <path d="M7 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19L7 19C5.895 19 5 18.105 5 17L5 7C5 5.895 5.895 5 7 5Z"/>
  <path d="M9 9L15 9L15 15L9 15Z"/>
  <path d="M9 5L9 2"/>
  <path d="M9 22L9 19"/>
  <path d="M12 5L12 2"/>
  <path d="M12 22L12 19"/>
  <path d="M15 5L15 2"/>
  <path d="M15 22L15 19"/>
  <path d="M9 5L9 2"/>
  <path d="M19 9L22 9"/>
  <path d="M9 22L9 19"/>
  <path d="M2 9L5 9"/>
  <path d="M12 5L12 2"/>
  <path d="M19 12L22 12"/>
  <path d="M12 22L12 19"/>
  <path d="M2 12L5 12"/>
  <path d="M15 5L15 2"/>
  <path d="M19 15L22 15"/>
  <path d="M15 22L15 19"/>
  <path d="M2 15L5 15"/>
</svg>
