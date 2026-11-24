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
  <path d="M3.004 9.98L3.004 4.98C3.004 3.875 3.898 2.98 5.004 2.98L19.004 2.98C20.109 2.98 21.004 3.875 21.004 4.98L21.004 18.98C21.004 20.082 20.109 20.98 19.004 20.98L14.004 20.98"/>
  <path d="M9.004 20.98L3.004 20.98L3.004 14.98"/>
  <path d="M11.004 12.98L3.004 20.98"/>
</svg>
