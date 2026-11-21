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
  <path d="M3 4L21 4C21.551 4 22 4.449 22 5L22 9C22 9.551 21.551 10 21 10L3 10C2.449 10 2 9.551 2 9L2 5C2 4.449 2.449 4 3 4Z"/>
  <path d="M7 7L6 7"/>
  <path d="M3 14L21 14C21.551 14 22 14.449 22 15L22 19C22 19.551 21.551 20 21 20L3 20C2.449 20 2 19.551 2 19L2 15C2 14.449 2.449 14 3 14Z"/>
  <path d="M7 17L6 17"/>
</svg>
