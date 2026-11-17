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
  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
  <path d="M4,20v-.000002000000677c0-1.10456838878963.895429604909623-1.999997999999323,1.999997999999323-1.999997999999323h12.000004000001354c1.104568395099705,0,1.999997999999323-.895429611209693,1.999997999999323-1.999997999999323v-.000002000000677"/>
  <line x1="12" y1="6.989999999999782" x2="12" y2="7"/>
  <line x1="12" y1="13" x2="12" y2="10"/>
</svg>
