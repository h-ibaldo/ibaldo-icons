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
  <path d="M18 4L18 3.152C18 2.516 17.484 2 16.844 2L11.156 2C10.516 2 10 2.516 10 3.152L10 8.848C10 9.484 10.516 10 11.156 10L16.844 10C17.484 10 18 9.484 18 8.848L18 8L21.277 9.641C21.609 9.805 22 9.563 22 9.191L22 2.809C22 2.438 21.609 2.195 21.277 2.359Z"/>
  <path d="M6 3.684C3.637 4.805 2 7.207 2 10C2 13.172 4.109 15.844 7 16.707L7 21L11.57 17L15 17C17.379 17 19.477 15.813 20.738 14"/>
</svg>
