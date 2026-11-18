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
  <path d="M17 11L19 9L17 7L17 4L14 4L12 2L10 4L7 4L7 7L5 9L7 11L7 14L10 14L12 16L14 14L17 14Z"/>
  <path d="M8 14.465L8 22L12 20L16 22L16 14.465"/>
</svg>
