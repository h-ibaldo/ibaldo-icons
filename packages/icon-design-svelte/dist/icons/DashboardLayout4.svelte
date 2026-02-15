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
  <rect x="15.999999990790457" y="2.000000000448381" width="6" height="8" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="1.999999990790457" y="16.000000000448381" width="10" height="6" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="6.999999990790457" cy="7.000000000449745" r="4.999999999999773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="15.999999990790457" y1="22.0000000004502" x2="21.999999990790457" y2="22.0000000004502" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="15.999999990790457" y1="18.000000000448381" x2="21.999999990790457" y2="18.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="15.999999990790457" y1="14.000000000448381" x2="21.999999990790457" y2="14.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="6.999999990790457 2.000000000448381 6.999999990790457 7.0000000004502 11.999999990790457 7.0000000004502" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
