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
  <rect x="1.999999995185732" y="6.999999997010121" width="19.999999999999943" height="10.000000007293295" rx="4.99999501106799" ry="4.99999501106799"/>
  <line x1="6.999999990797733" y1="11.000000000448381" x2="16.999999990797733" y2="11.000000000448381"/>
</svg>
