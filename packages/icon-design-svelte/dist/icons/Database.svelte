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
  <path d="M4 7C4 4.789 7.582 3 12 3C16.418 3 20 4.789 20 7C20 9.211 16.418 11 12 11C7.582 11 4 9.211 4 7Z"/>
  <path d="M20 12C20 14.211 16.418 16 12 16C7.582 16 4 14.211 4 12"/>
  <path d="M20 17C20 19.211 16.418 21 12 21C7.582 21 4 19.211 4 17"/>
  <path d="M20 7L20 17"/>
  <path d="M4 17L4 7"/>
</svg>
