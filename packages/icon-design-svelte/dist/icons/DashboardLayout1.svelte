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
  <rect x="1.999999990790457" y="2.000000000448381" width="8" height="6" rx="1" ry="1"/>
  <rect x="13.999999990790457" y="16.000000000448381" width="8" height="6" rx="1" ry="1"/>
  <rect x="13.999999990790457" y="2.000000000448381" width="8" height="10" rx="1" ry="1"/>
  <rect x="1.999999990790457" y="12.000000000448381" width="8" height="10" rx="1" ry="1"/>
</svg>
