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
  <path d="M8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6C16 8.211 14.211 10 12 10C9.789 10 8 8.211 8 6Z"/>
  <path d="M4 22L4 19C4 15.688 6.688 13 10 13L14 13C16.031 13 17.824 14.008 18.91 15.551"/>
  <path d="M15 20L16.5 22L21 18"/>
</svg>
