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
  <path d="M14 13C13.172 13 12.5 12.328 12.5 11.5L12.5 8.5C12.5 7.672 13.172 7 14 7C14.828 7 15.5 7.672 15.5 8.5L15.5 11.5C15.5 12.328 14.828 13 14 13Z"/>
  <path d="M6.5 13L7.5 13C8.328 13 9 12.328 9 11.5C9 10.672 8.328 10 7.5 10C6.672 10 6 9.328 6 8.5C6 7.672 6.672 7 7.5 7L8.5 7"/>
  <path d="M19.5 13L20.5 13C21.328 13 22 12.328 22 11.5C22 10.672 21.328 10 20.5 10C19.672 10 19 9.328 19 8.5C19 7.672 19.672 7 20.5 7L21.5 7"/>
  <path d="M22 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"/>
  <path d="M12 22L15 18L22 18"/>
</svg>
