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
  <path d="M9 22L2 15L7.977 11.266C9.16 10.523 10.699 10.699 11.688 11.688L12.313 12.313C13.301 13.301 13.477 14.84 12.734 16.023Z"/>
  <path d="M11.93 17.313L6.688 12.07"/>
  <path d="M12 12L22 2"/>
  <path d="M5.5 3L5.5 8"/>
  <path d="M8 5.5L3 5.5"/>
  <path d="M20.5 13L20.5 16"/>
  <path d="M22 14.5L19 14.5"/>
  <path d="M16.5 19L16.5 22"/>
  <path d="M18 20.5L15 20.5"/>
</svg>
