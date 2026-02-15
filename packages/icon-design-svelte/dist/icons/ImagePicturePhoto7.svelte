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
  <polygon points="16.999999993269739 14.998779299945454 14.11535643858042 19.037231448382954 8.999999993269739 10.998779299945454 1.999999993269739 21.998779299945454 11.999999993269739 21.998779299945454 15.999999993269739 21.998779299945454 21.999999993269739 21.998779299945454 16.999999993269739 14.998779299945454" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="15.499999993269739" cy="8.498779299956368" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="1.999999993269739 14.998779299956368 1.999999993269739 1.998779299956368 21.999999993269739 1.998779299956368 21.999999993269739 14.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
