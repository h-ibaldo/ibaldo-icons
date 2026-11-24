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
  <path d="M10 15L15 15L15 10"/>
  <path d="M9.563 2.313C11.547 1.812 13.734 1.836 16.082 2.949C19.398 4.52 21.766 7.727 21.98 11.391C22.348 17.582 17.082 22.645 10.828 21.934C6.195 21.406 2.469 17.586 2.043 12.941C1.898 11.367 2.121 9.859 2.633 8.492C3.383 6.492 6.012 6.012 7.523 7.523L15 15"/>
</svg>
