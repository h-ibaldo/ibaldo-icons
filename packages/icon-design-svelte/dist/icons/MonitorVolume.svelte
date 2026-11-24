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
  <path d="M2 4L22 4L22 18L2 18Z"/>
  <path d="M12 21L12 18"/>
  <path d="M18 21L6 21"/>
  <path d="M8 9L6 9L6 13L8 13L12 15L12 7Z"/>
  <path d="M15 9.586C15.781 10.367 15.781 11.633 15 12.414"/>
  <path d="M17.207 7.793C18.977 9.563 18.977 12.438 17.207 14.207"/>
</svg>
