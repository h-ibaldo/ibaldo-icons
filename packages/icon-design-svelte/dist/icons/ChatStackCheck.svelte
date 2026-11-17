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
  <path d="M16 8.973C16 5.66 12.867 2.973 9 2.973C5.133 2.973 2 5.66 2 8.973C2 10.891 3.051 12.59 4.684 13.691C4.313 15.215 3.656 16.316 3 16.973C5.613 16.973 7.789 16.113 9.27 14.961C13.012 14.84 16 12.207 16 8.973Z"/>
  <path d="M8.613 15.418C9.676 17.441 12 18.871 14.73 18.961C16.211 20.113 18.387 20.973 21 20.973C20.344 20.316 19.688 19.215 19.316 17.691C20.949 16.594 22 14.891 22 12.973C22 9.836 19.188 7.262 15.605 7"/>
  <path d="M7 9L8 10L10.5 7.5"/>
</svg>
