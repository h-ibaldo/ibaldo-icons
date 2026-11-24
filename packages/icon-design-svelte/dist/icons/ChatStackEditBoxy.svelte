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
  <path d="M18 10L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L10 18"/>
  <path d="M22 13L22 5C22 3.344 20.656 2 19 2L7 2"/>
  <path d="M21.414 21.586L21.586 21.414C22.367 20.633 22.367 19.367 21.586 18.586L15 12L12 12L12 15L18.586 21.586C19.367 22.367 20.633 22.367 21.414 21.586Z"/>
  <path d="M17 20L20 17"/>
</svg>
