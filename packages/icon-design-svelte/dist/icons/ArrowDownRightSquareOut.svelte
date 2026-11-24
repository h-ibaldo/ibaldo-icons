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
  <path d="M15 21L21 21L21 15"/>
  <path d="M13 13L21 21"/>
  <path d="M11.004 17.98L5.004 17.98C3.898 17.98 3.004 17.082 3.004 15.98L3.004 4.98C3.004 3.875 3.898 2.98 5.004 2.98L16.004 2.98C17.109 2.98 18.004 3.875 18.004 4.98L18.004 10.98"/>
</svg>
