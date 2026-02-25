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
  <line x1="2.999999990790457" y1="15.000000000448381" x2="14.999999990790457" y2="3.000000000741238" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.999999990790457" y1="11.000000000448381" x2="2.99999999109059" y2="3.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="16.999999990079232 17.000000000446562 13.999999990079232 14.000000000446562 16.999999990079232 11.000000000446562" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.999999990799552,21.000000000446562h5.500003499280865c1.932994691409476,0,3.499996499998815-1.567001808591158,3.499996499998815-3.499996500000634v-.000007000000551c0-1.932994691410386-1.567001808589339-3.499996499998815-3.499996499998815-3.499996499998815h-3.500003500001185" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
