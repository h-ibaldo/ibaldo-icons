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
  <path d="M19.602 22L12.398 22C11.074 22 10 20.926 10 19.602L10 12.398C10 11.074 11.074 10 12.398 10L19.602 10C20.926 10 22 11.074 22 12.398L22 19.602C22 20.926 20.926 22 19.602 22Z"/>
  <path d="M16 13.5L16 13.5"/>
  <path d="M16 16.5L16 18.5"/>
  <path d="M5.852 7.5L6.949 8.602L9.148 6.398"/>
  <path d="M12.973 7C12.723 4.195 10.367 2 7.5 2C4.461 2 2 4.461 2 7.5C2 10.367 4.199 12.723 7 12.977"/>
</svg>
