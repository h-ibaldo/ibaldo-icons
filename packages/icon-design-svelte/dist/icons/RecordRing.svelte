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
  <path d="M16 12C16 8.133 12.867 5 9 5C5.133 5 2 8.133 2 12C2 15.867 5.133 19 9 19C12.867 19 16 15.867 16 12Z"/>
  <path d="M19.941 19C21.238 16.98 22 14.578 22 12C22 9.422 21.238 7.023 19.941 5"/>
</svg>
