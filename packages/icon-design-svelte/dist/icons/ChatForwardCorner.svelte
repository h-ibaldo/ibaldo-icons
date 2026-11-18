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
  <path d="M15 5L22 5"/>
  <path d="M20 3L22 5L20 7"/>
  <path d="M11 3.039C5.945 3.441 2 6.852 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C17.523 19 22 15.418 22 11C22 10.969 21.996 10.938 21.992 10.906"/>
</svg>
