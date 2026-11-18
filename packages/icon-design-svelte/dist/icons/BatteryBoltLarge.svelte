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
  <path d="M6 19L5 19C3.895 19 3 18.105 3 17L3 7C3 5.895 3.895 5 5 5L7 5"/>
  <path d="M16 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19L15 19"/>
  <path d="M19 15L21 15C21.551 15 22 14.555 22 14L22 10C22 9.445 21.551 9 21 9L19 9"/>
  <path d="M10 20L10 14L6 12L12 4L12 10L16 12Z"/>
</svg>
