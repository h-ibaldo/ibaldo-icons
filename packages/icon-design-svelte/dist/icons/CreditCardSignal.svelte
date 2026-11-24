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
  <path d="M4 5L13 5C14.105 5 15 5.895 15 7L15 14C15 15.105 14.105 16 13 16L4 16C2.895 16 2 15.105 2 14L2 7C2 5.895 2.895 5 4 5Z"/>
  <path d="M2 9L15 9"/>
  <path d="M21 2L11.945 2L11.945 5"/>
  <path d="M21 22L11.945 22L11.945 16"/>
  <path d="M18 8C19.105 9.105 19.105 10.895 18 12"/>
  <path d="M20 5.172C22.668 7.84 22.668 12.16 20 14.828"/>
</svg>
