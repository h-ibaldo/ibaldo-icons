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
  <path d="M5 9L5.605 8.547C7.555 7.086 10.277 7.277 12 9C13.723 10.723 16.445 10.914 18.395 9.453L19 9"/>
  <path d="M5 15.434L5.605 14.977C7.555 13.52 10.277 13.711 12 15.434C13.723 17.152 16.445 17.348 18.395 15.887L19 15.434"/>
  <path d="M8 19L16 5"/>
</svg>
