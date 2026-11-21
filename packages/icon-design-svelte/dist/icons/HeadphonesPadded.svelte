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
  <path d="M18 13L19 13C20.105 13 21 13.895 21 15L21 19C21 20.105 20.105 21 19 21L18 21C16.895 21 16 20.105 16 19L16 15C16 13.895 16.895 13 18 13Z"/>
  <path d="M5 13L6 13C7.105 13 8 13.895 8 15L8 19C8 20.105 7.105 21 6 21L5 21C3.895 21 3 20.105 3 19L3 15C3 13.895 3.895 13 5 13Z"/>
  <path d="M3 15L3 11.969C3 6.992 7.035 2.953 12.016 2.953C16.992 2.953 21.031 6.992 21.031 11.969L21.031 15"/>
  <path d="M18.879 6.121L17.512 7.488C17.105 7.895 16.422 7.887 15.941 7.469C14.891 6.555 13.52 6 12.016 6C10.543 6 9.195 6.531 8.152 7.414C7.652 7.836 6.938 7.82 6.543 7.379L5.281 5.977"/>
</svg>
