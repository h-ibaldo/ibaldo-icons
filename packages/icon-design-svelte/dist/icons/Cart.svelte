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
  <path d="M19 18L5.813 18C4.773 18 4.254 16.746 4.988 16.012L6 15"/>
  <path d="M6 15L20 14L22 5L5.254 5"/>
  <path d="M2 2L5 3L6 15"/>
  <path d="M4 19.945C4 18.871 4.871 18 5.945 18C7.023 18 7.895 18.871 7.895 19.945C7.895 21.023 7.023 21.895 5.945 21.895C4.871 21.895 4 21.023 4 19.945Z"/>
  <path d="M17 19.945C17 18.871 17.871 18 18.945 18C20.023 18 20.895 18.871 20.895 19.945C20.895 21.023 20.023 21.895 18.945 21.895C17.871 21.895 17 21.023 17 19.945Z"/>
</svg>
