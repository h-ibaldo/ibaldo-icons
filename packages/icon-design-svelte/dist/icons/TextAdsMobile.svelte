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
  <path d="M15 18L15 20C15 21.105 14.105 22 13 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L13 2C14.105 2 15 2.895 15 4"/>
  <path d="M6 14L8 8L10 14"/>
  <path d="M14 8L13 8L13 14L14 14C15.105 14 16 13.105 16 12L16 10C16 8.895 15.105 8 14 8Z"/>
  <path d="M19 13.5C19 13.5 19.449 14 20.5 14C21.328 14 22 13.328 22 12.5C22 11.672 21.207 11.215 20.5 11C19.707 10.762 19 10.328 19 9.5C19 8.672 19.672 8 20.5 8C21.551 8 22 8.5 22 8.5"/>
  <path d="M7 13L9 13"/>
  <path d="M8 19L9 19"/>
</svg>
