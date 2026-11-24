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
  <path d="M11 10C11 9.449 11.449 9 12 9C12.551 9 13 9.449 13 10C13 10.551 12.551 11 12 11C11.449 11 11 10.551 11 10Z"/>
  <path d="M16.469 22L7.531 22C5.977 22 5.02 20.305 5.816 18.973L7 17"/>
  <path d="M3 3L21.508 21.508"/>
  <path d="M8.352 8.352C8.98 6.965 10.379 6 12 6C14.211 6 16 7.789 16 10C16 11.621 15.035 13.02 13.648 13.648"/>
  <path d="M5.43 5.434C6.879 3.355 9.281 2 12 2C16.418 2 20 5.582 20 10C20 12.719 18.645 15.121 16.57 16.566"/>
  <path d="M13.797 17.797C13.219 17.93 12.617 18 12 18C7.582 18 4 14.418 4 10C4 9.383 4.07 8.781 4.203 8.203"/>
</svg>
