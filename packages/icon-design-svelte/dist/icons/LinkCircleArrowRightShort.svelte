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
  <path d="M6 18L8 20L6 22"/>
  <path d="M2 20L8 20"/>
  <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15"/>
  <path d="M8.828 12.828C7.723 11.723 7.723 9.934 8.828 8.828C9.934 7.723 11.723 7.723 12.828 8.828"/>
  <path d="M15.172 11.172C16.277 12.277 16.277 14.066 15.172 15.172C14.066 16.277 12.277 16.277 11.172 15.172"/>
  <path d="M12.672 12.672L11.328 11.328"/>
</svg>
