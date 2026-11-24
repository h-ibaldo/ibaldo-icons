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
  <path d="M22 12C22 15.867 18.867 19 15 19C11.133 19 8 15.867 8 12C8 8.133 11.133 5 15 5C18.867 5 22 8.133 22 12Z"/>
  <path d="M4.059 5C2.762 7.023 2 9.422 2 12C2 14.578 2.762 16.977 4.059 19"/>
  <path d="M15 9L15 15"/>
  <path d="M18 12L12 12"/>
</svg>
