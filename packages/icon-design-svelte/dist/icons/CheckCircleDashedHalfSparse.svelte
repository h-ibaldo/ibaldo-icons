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
  <path d="M4.492 18.695C4.934 19.199 5.426 19.656 5.961 20.059"/>
  <path d="M2.027 11.605C2.016 11.773 2 11.934 2 12.105C2 12.617 2.051 13.113 2.125 13.605"/>
  <path d="M5.406 4.598C4.906 5.039 4.449 5.531 4.047 6.063"/>
  <path d="M11 22.055C11.328 22.086 11.66 22.105 12 22.105C12.34 22.105 12.672 22.086 13 22.055C18.055 21.551 22 17.289 22 12.105C22 6.918 18.055 2.656 13 2.156C12.672 2.121 12.34 2.105 12 2.105C11.66 2.105 11.328 2.121 11 2.156"/>
  <path d="M8 12.105L11 15.105L16 9.105"/>
</svg>
