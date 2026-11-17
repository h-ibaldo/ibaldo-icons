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
  <path d="M15 11L12 14L9 11"/>
  <path d="M7 3.348C3.746 5.234 1.648 8.891 2.051 13.004C2.5 17.633 6.238 21.426 10.859 21.938C16.895 22.605 22 17.898 22 12C22 8.008 19.66 4.563 16.277 2.961C14.293 2.02 12 3.484 12 5.68L12 14"/>
</svg>
