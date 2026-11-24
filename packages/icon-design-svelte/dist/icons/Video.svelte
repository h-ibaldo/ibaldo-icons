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
  <path d="M14 18L4 18C2.895 18 2 17.105 2 16L2 9C2 7.895 2.895 7 4 7L14 7C15.105 7 16 7.895 16 9L16 16C16 17.105 15.105 18 14 18Z"/>
  <path d="M16 11L20.445 8.035C21.109 7.594 22 8.07 22 8.867L22 16.133C22 16.93 21.109 17.406 20.445 16.965L16 14"/>
</svg>
