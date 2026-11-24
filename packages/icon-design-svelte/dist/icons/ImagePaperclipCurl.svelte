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
  <path d="M7 11L6 11C3.789 11 2 9.211 2 7C2 4.789 3.789 3 6 3L14 3C15.105 3 16 3.895 16 5C16 6.105 15.105 7 14 7L8 7"/>
  <path d="M22 19.949C22 21.082 21.082 22 19.949 22"/>
  <path d="M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z"/>
  <path d="M16 22C16 18.688 18.688 16 22 16"/>
  <path d="M15 15L15 15"/>
</svg>
