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
  <path d="M12 2L12 5"/>
  <path d="M22 12L19 12"/>
  <path d="M5 12L2 12"/>
  <path d="M7 17L5 19"/>
  <path d="M7 7L5 5"/>
  <path d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 14.777 3.137 17.293 4.965 19.105L5 19"/>
  <path d="M13.926 12.535C14.223 11.473 13.602 10.367 12.535 10.074C11.473 9.777 10.371 10.398 10.074 11.465C9.777 12.527 10.398 13.629 11.465 13.926C12.527 14.223 13.629 13.602 13.926 12.535Z"/>
  <path d="M16.617 6.895L13.336 10.523"/>
  <path d="M15 19L21 19"/>
  <path d="M18 22L18 16"/>
</svg>
