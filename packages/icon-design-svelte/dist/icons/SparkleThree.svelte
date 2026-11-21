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
  <path d="M2 7C4.211 7 6 8.789 6 11"/>
  <path d="M10 7C7.789 7 6 8.789 6 11"/>
  <path d="M10 7C7.789 7 6 5.211 6 3"/>
  <path d="M2 7C4.211 7 6 5.211 6 3"/>
  <path d="M14 11C16.211 11 18 12.789 18 15"/>
  <path d="M22 11C19.789 11 18 12.789 18 15"/>
  <path d="M22 11C19.789 11 18 9.211 18 7"/>
  <path d="M14 11C16.211 11 18 9.211 18 7"/>
  <path d="M6 18C8.211 18 10 19.789 10 22"/>
  <path d="M14 18C11.789 18 10 19.789 10 22"/>
  <path d="M14 18C11.789 18 10 16.211 10 14"/>
  <path d="M6 18C8.211 18 10 16.211 10 14"/>
</svg>
