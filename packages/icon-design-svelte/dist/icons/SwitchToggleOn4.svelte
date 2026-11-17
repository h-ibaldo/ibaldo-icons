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
  <rect x="2.000000211418751" y="4.999996761721775" width="20.000000000036607" height="14.000000015773026" rx="6.999992973722963" ry="6.999992973722963" transform="translate(24.000000402665158 23.999993559425533) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="15.000000396670202" cy="11.999996978796844" r="3.000000000000227" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
