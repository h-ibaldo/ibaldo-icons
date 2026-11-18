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
  <path d="M18 13C18 14.105 17.105 15 16 15L4 15C2.895 15 2 14.105 2 13L2 7C2 5.895 2.895 5 4 5L5 5L5 2L10 5"/>
  <path d="M22 11L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L7 19"/>
  <path d="M20.414 2.586L20.586 2.758C21.367 3.539 21.367 4.805 20.586 5.586L15 11L12 11L12 8L17.586 2.586C18.367 1.805 19.633 1.805 20.414 2.586Z"/>
  <path d="M16 4.172L19 7.172"/>
</svg>
