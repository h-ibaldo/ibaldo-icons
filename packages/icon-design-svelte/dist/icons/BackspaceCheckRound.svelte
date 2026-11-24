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
  <path d="M22 17L22 7C22 5.344 20.656 4 19 4L9 4C8.086 4 7.223 4.418 6.652 5.133L2.676 10.133C1.805 11.227 1.805 12.773 2.676 13.867L6.652 18.867C7.223 19.582 8.086 20 9 20L19 20C20.656 20 22 18.656 22 17Z"/>
  <path d="M10 12L12 14L16 10"/>
</svg>
