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
  <path d="M10 19L14 19"/>
  <path d="M4 2L20 2"/>
  <path d="M6 3L6 5.324C6 6.996 6.836 8.559 8.227 9.484L12 12L15.773 9.484C17.164 8.559 18 6.996 18 5.324L18 3"/>
  <path d="M20 22L4 22"/>
  <path d="M18 21L18 18.676C18 17.004 17.164 15.441 15.773 14.516L12 12L8.227 14.516C6.836 15.441 6 17.004 6 18.676L6 21"/>
</svg>
