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
  <path d="M12 3L12 3"/>
  <path d="M18.363 5.637L18.363 5.637"/>
  <path d="M15.445 3.684L15.445 3.684"/>
  <path d="M21 20L17 20L17 16"/>
  <path d="M17 19.48C19.41 17.867 21 15.121 21 12C21 10.781 20.754 9.617 20.313 8.555"/>
  <path d="M12 21L12 21"/>
  <path d="M5.637 18.363L5.637 18.363"/>
  <path d="M8.555 20.316L8.555 20.316"/>
  <path d="M3 4L7 4L7 8"/>
  <path d="M7 4.52C4.59 6.133 3 8.879 3 12C3 13.219 3.246 14.383 3.688 15.445"/>
</svg>
