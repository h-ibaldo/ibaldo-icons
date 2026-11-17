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
  <path d="M4,19.999999999998181c0-1.104569499599165-.895430500400835-2-2-2"/>
  <path d="M8,19.999999999998181c0-3.313708498797496-2.686291501198866-6-6-6"/>
  <path d="M12,19.999999999998181c0-5.522847497999464-4.477152502000536-10-10-10"/>
  <path d="M16,19.999999999998181h4.000002000000677c1.104568395088791,0,1.999997999999323-.895429604905075,1.999997999999323-1.999997999999323V5.999997999997504c0-1.10456839509061-.895429604910532-1.999997999999323-1.999997999999323-1.999997999999323H3.999997999999323c-1.104568395088791,0-1.999997999999323.895429611206055-1.999997999999323,1.999997999999323v.000002000000677"/>
</svg>
