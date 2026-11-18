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
  <path d="M7 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 9"/>
  <path d="M2 7L22 7"/>
  <path d="M7 12L12 12"/>
  <path d="M7 16L9 16"/>
  <path d="M20.414 12.414L20.586 12.586C21.367 13.367 21.367 14.633 20.586 15.414L14 22L11 22L11 19L17.586 12.414C18.367 11.633 19.633 11.633 20.414 12.414Z"/>
  <path d="M16 14L19 17"/>
</svg>
