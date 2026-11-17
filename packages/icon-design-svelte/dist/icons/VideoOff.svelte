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
  <path d="M16 11L20.445 8.035C21.109 7.594 22 8.07 22 8.867L22 16.133C22 16.93 21.109 17.406 20.445 16.965L16 14"/>
  <path d="M5 2L17 22"/>
  <path d="M4 7C2.895 7 2 7.895 2 9L2 16C2 17.105 2.895 18 4 18L10.602 18"/>
  <path d="M14.547 17.914C15.383 17.676 16 16.914 16 16L16 9C16 7.895 15.105 7 14 7L8 7"/>
</svg>
