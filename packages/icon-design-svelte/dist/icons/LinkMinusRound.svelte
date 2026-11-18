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
  <path d="M13 7.762C14.203 8.566 15 9.941 15 11.5C15 13.984 12.984 16 10.5 16L6.5 16C4.016 16 2 13.984 2 11.5C2 9.188 3.754 7.301 6 7.051"/>
  <path d="M11 12.238C9.797 11.434 9 10.059 9 8.5C9 6.016 11.016 4 13.5 4L17.5 4C19.984 4 22 6.016 22 8.5C22 10.813 20.246 12.699 18 12.949"/>
  <path d="M22 20L16 20"/>
</svg>
