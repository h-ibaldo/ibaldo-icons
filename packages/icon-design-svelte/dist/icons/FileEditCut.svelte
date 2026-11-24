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
  <path d="M18 19L18 20C18 21.105 17.105 22 16 22L4 22C2.895 22 2 21.105 2 20L2 7.828C2 7.298 2.211 6.789 2.586 6.414L6.414 2.586C6.789 2.211 7.298 2 7.828 2L16 2C17.105 2 18 2.895 18 4"/>
  <path d="M21.707 8.879L20.121 7.293C19.731 6.902 19.098 6.902 18.707 7.293L11 15L11 18L14 18L21.707 10.293C22.098 9.902 22.098 9.269 21.707 8.879Z"/>
</svg>
