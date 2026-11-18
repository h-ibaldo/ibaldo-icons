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
  <path d="M16 17C16 19.211 14.211 21 12 21C9.789 21 8 19.211 8 17C8 14.789 9.789 13 12 13C14.211 13 16 14.789 16 17Z"/>
  <path d="M12 12L7 9L7 3L17 3L17 9Z"/>
  <path d="M12 3L12 12"/>
</svg>
