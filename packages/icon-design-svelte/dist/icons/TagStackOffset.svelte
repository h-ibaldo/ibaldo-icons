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
  <path d="M17 20L6.492 20C6.18 20 5.891 19.855 5.699 19.609L1.84 14.609C1.559 14.25 1.559 13.75 1.84 13.391L5.699 8.391C5.891 8.145 6.18 8 6.492 8L17 8C17.551 8 18 8.449 18 9L18 19C18 19.551 17.551 20 17 20Z"/>
  <path d="M10 4L19 4C20.656 4 22 5.344 22 7L22 16"/>
  <path d="M6 14L6 14"/>
</svg>
