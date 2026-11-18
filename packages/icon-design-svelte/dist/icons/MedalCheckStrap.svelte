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
  <path d="M18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16C6 12.688 8.688 10 12 10C15.313 10 18 12.688 18 16Z"/>
  <path d="M12 5.668L10 2L3 2L8.137 11.414"/>
  <path d="M15.863 11.414L21 2L14 2L9.277 10.656"/>
  <path d="M10 16L10.691 17.379C10.844 17.684 11.25 17.75 11.492 17.512L14 15"/>
</svg>
