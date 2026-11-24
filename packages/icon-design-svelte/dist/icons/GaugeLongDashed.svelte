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
  <path d="M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z"/>
  <path d="M19 5L13.414 10.586"/>
  <path d="M10.586 13.414L9 15"/>
  <path d="M3.285 16.906C4.078 18.32 5.23 19.563 6.703 20.48C8.352 21.512 10.188 21.992 12 21.992"/>
  <path d="M3.219 7.242C2.301 8.934 1.918 10.781 2.023 12.586"/>
  <path d="M16.383 20.977C18.012 20.184 19.449 18.949 20.48 17.297C22.996 13.27 22.289 8.152 19.066 4.934"/>
  <path d="M15.25 2.551C14.691 2.359 14.129 2.211 13.559 2.121"/>
  <path d="M9.07 2.449C8.047 2.762 7.07 3.234 6.188 3.863"/>
</svg>
