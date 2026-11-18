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
  <path d="M7 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 8"/>
  <path d="M6 7L6 7"/>
  <path d="M16 7L10 7"/>
  <path d="M6 12L6 12"/>
  <path d="M12 12L10 12"/>
  <path d="M6 17L6 17"/>
  <path d="M20.414 12.414L20.586 12.586C21.367 13.367 21.367 14.633 20.586 15.414L14 22L11 22L11 19L17.586 12.414C18.367 11.633 19.633 11.633 20.414 12.414Z"/>
  <path d="M16 14L19 17"/>
</svg>
