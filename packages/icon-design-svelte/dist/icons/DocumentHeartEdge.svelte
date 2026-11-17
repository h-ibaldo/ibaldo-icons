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
  <path d="M17 7L7 7"/>
  <path d="M10 12L7 12"/>
  <path d="M9 17L7 17"/>
  <path d="M12 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 10"/>
  <path d="M17 14C15.895 12.895 14.105 12.895 13 14C11.895 15.105 11.895 16.895 13 18L15.586 20.586C16.367 21.367 17.633 21.367 18.414 20.586L21 18C22.105 16.895 22.105 15.105 21 14C19.895 12.895 18.105 12.895 17 14Z"/>
</svg>
