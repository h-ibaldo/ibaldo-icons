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
  <path d="M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"/>
  <path d="M13 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L15 14"/>
  <path d="M21.004 3.453L20.449 3.266C19.82 3.059 19.164 2.953 18.504 2.953C17.398 2.953 16.504 3.848 16.504 4.953C16.504 6.055 17.398 6.953 18.504 6.953L19.504 6.953C20.605 6.953 21.504 7.848 21.504 8.953C21.504 10.055 20.605 10.953 19.504 10.953C18.84 10.953 18.184 10.844 17.555 10.637L17.004 10.453"/>
  <path d="M19.004 1.953L19.004 2.953"/>
  <path d="M19.004 10.953L19.004 11.953"/>
</svg>
