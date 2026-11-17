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
  <path d="M16 18C16 20.211 14.211 22 12 22C9.789 22 8 20.211 8 18C8 15.789 9.789 14 12 14C14.211 14 16 15.789 16 18Z"/>
  <path d="M9 11L15 11L21 4.5L17 2Z"/>
  <path d="M12 7.625L7 2L3 4.5L9 11"/>
</svg>
