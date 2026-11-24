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
  <path d="M3 2L21 21"/>
  <path d="M20.93 14.707C21.605 13.629 22 12.363 22 11C22 7.133 18.867 4 15 4L10.789 4"/>
  <path d="M5.684 4.836C3.492 6.016 2 8.336 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C15.941 18 16.84 17.813 17.66 17.473"/>
  <path d="M15 9L16 9"/>
  <path d="M8 9L9.633 9"/>
  <path d="M8 13L13.422 13"/>
</svg>
