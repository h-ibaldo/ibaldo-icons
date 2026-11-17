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
  <path d="M9.999999993659912,21.998779299956368H3.999999993659912c-1.104569499670106,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500329894-2,2-2h16c1.104569499650097,0,2,.895430500338989,2,2v6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="1.999999993659912" y1="7.998779299956368" x2="21.999999993659912" y2="7.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16.999999993659912" cy="16.998779299956368" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="15.499999993659912 16.998779297526198 16.499999993659912 17.9987793023829 18.499999993659912 15.998779297526198" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.009999993640122" y1="4.998779299956368" x2="4.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.009999993640122" y1="4.998779299956368" x2="7.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.009999993640122" y1="4.998779299956368" x2="10.999999993639904" y2="4.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
