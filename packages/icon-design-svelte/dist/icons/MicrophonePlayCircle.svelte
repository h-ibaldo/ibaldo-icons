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
  <path d="M8 18L8 22"/>
  <path d="M12 22L4 22"/>
  <path d="M16 12.5L16 15.5L18.5 14Z"/>
  <path d="M22 14C22 11.238 19.762 9 17 9C14.238 9 12 11.238 12 14C12 16.762 14.238 19 17 19C19.762 19 22 16.762 22 14Z"/>
  <path d="M2 15C3.461 16.828 5.703 18 8.227 18C8.84 18 9.43 17.93 10 17.801"/>
  <path d="M12 7L12 6C12 3.789 10.211 2 8 2C5.789 2 4 3.789 4 6L4 10C4 12.211 5.789 14 8 14"/>
</svg>
