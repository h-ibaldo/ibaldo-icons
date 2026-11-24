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
  <path d="M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"/>
  <path d="M17 15L17 17L19 17"/>
  <path d="M2 9L20 9"/>
  <path d="M9 15L2 15"/>
  <path d="M20 9L20 5C20 3.895 19.105 3 18 3L4 3C2.895 3 2 3.895 2 5L2 19C2 20.105 2.895 21 4 21L10 21"/>
  <path d="M8 3L8 21"/>
  <path d="M14 3L14 9"/>
</svg>
