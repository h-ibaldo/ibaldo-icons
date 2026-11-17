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
  <path d="M9 11L12 8L15 11"/>
  <path d="M12 16L12 8"/>
  <path d="M19 19.137C20.852 17.32 22 14.797 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 14.797 3.148 17.32 5 19.137"/>
  <path d="M8 21.16C9.227 21.699 10.578 22 12 22C13.422 22 14.773 21.699 16 21.16"/>
</svg>
