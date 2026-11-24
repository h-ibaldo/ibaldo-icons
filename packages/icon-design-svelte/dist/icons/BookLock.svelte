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
  <path d="M19 17L7 17C5.895 17 5 17.895 5 19C5 20.105 5.895 21 7 21L19 21"/>
  <path d="M19 17L19 3L7 3C5.895 3 5 3.895 5 5"/>
  <path d="M5 5L5 19"/>
  <path d="M9.027 10L15.027 10L15.027 14L9.027 14Z"/>
  <path d="M14.027 10L14.027 8C14.027 6.895 13.129 6 12.027 6C10.922 6 10.027 6.895 10.027 8L10.027 10"/>
</svg>
