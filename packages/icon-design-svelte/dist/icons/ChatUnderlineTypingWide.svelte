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
  <path d="M16 2L8 2C4.688 2 2 4.688 2 8C2 10.973 4.164 13.434 7 13.91L7 18L11.445 14L16 14C19.313 14 22 11.313 22 8C22 4.688 19.313 2 16 2Z"/>
  <path d="M19 22L5 22"/>
  <path d="M8 8L8 8"/>
  <path d="M12 8L12 8"/>
  <path d="M16 8L16 8"/>
</svg>
