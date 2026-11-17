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
  <path d="M11 9L8 12L11 15"/>
  <path d="M16 12L8 12"/>
  <path d="M19.137 5C17.32 3.148 14.797 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C14.797 22 17.32 20.852 19.137 19"/>
  <path d="M21.16 16C21.699 14.773 22 13.422 22 12C22 10.578 21.699 9.227 21.16 8"/>
</svg>
