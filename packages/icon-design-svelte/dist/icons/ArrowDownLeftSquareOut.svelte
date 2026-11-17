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
  <path d="M9.004 21L3.004 21L3.004 15"/>
  <path d="M11.004 13L3.004 21"/>
  <path d="M13 17.98L19 17.98C20.105 17.98 21 17.082 21 15.98L21 4.98C21 3.875 20.105 2.98 19 2.98L8 2.98C6.895 2.98 6 3.875 6 4.98L6 10.98"/>
</svg>
