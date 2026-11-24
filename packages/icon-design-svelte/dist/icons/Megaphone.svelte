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
  <path d="M5 8L5 12C5 13.105 5.895 14 7 14L11.219 14C13.039 14 14.824 14.496 16.383 15.438L19.594 17.375C20.254 17.668 21 17.184 21 16.461L21 3.539C21 2.816 20.254 2.332 19.594 2.625L16.383 4.563C14.824 5.504 13.039 6 11.219 6L7 6C5.895 6 5 6.895 5 8Z"/>
  <path d="M5 8L3 8C2.449 8 2 8.449 2 9L2 11C2 11.551 2.449 12 3 12L5 12"/>
  <path d="M7 14L8.793 20.273C8.914 20.703 9.309 21 9.754 21L11.676 21C12.34 21 12.82 20.363 12.637 19.727L11 14"/>
</svg>
