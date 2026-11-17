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
  <path d="M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z"/>
  <path d="M19 17L15 17"/>
  <path d="M13.828 8.172L15.172 6.828C16.277 5.723 16.277 3.934 15.172 2.828C14.066 1.723 12.277 1.723 11.172 2.828L9.828 4.172C8.723 5.277 8.723 7.066 9.828 8.172C10.379 8.723 11.105 9 11.828 9C12.551 9 13.277 8.723 13.828 8.172Z"/>
  <path d="M6.828 15.172L8.172 13.828C9.277 12.723 9.277 10.934 8.172 9.828C7.066 8.723 5.277 8.723 4.172 9.828L2.828 11.172C1.723 12.277 1.723 14.066 2.828 15.172C3.934 16.277 5.723 16.277 6.828 15.172Z"/>
  <path d="M6 12L12 6"/>
</svg>
