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
  <path d="M22 7C22 4.238 19.762 2 17 2C14.238 2 12 4.238 12 7C12 9.762 14.238 12 17 12C19.762 12 22 9.762 22 7Z"/>
  <path d="M17 2L17 7L22 7"/>
  <path d="M8 3L8 11"/>
  <path d="M3 3L3 11"/>
  <path d="M8 7C8.555 7 9 6.555 9 6C9 5.445 8.555 5 8 5C7.445 5 7 5.445 7 6C7 6.555 7.445 7 8 7Z"/>
  <path d="M3 9C3.555 9 4 8.555 4 8C4 7.445 3.555 7 3 7C2.445 7 2 7.445 2 8C2 8.555 2.445 9 3 9Z"/>
  <path d="M2 22L2 18"/>
  <path d="M6 22L6 15"/>
  <path d="M10 22L10 18"/>
  <path d="M14 22L14 15"/>
  <path d="M18 22L18 18"/>
  <path d="M22 22L22 15"/>
</svg>
