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
  <path d="M7.484 4.66L10 2L22 14L19.484 16.66C19.129 16.336 18.66 16.141 18.141 16.141C17.039 16.141 16.141 17.039 16.141 18.141C16.141 18.66 16.336 19.129 16.66 19.484L14 22L2 10L4.66 7.484C5.012 7.805 5.484 8 6 8C7.105 8 8 7.105 8 6C8 5.484 7.805 5.012 7.484 4.66Z"/>
  <path d="M7 13L8 12"/>
  <path d="M13 7L14 6"/>
  <path d="M11 9L10 10"/>
  <path d="M18 6L22 2"/>
  <path d="M18 2L22 6"/>
</svg>
