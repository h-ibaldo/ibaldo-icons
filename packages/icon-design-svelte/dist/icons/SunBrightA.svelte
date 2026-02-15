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
  <circle cx="12" cy="12.000000005924448" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="19" y1="12.000000005924448" x2="22" y2="12.000000005924448" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2" y1="12.000000005924448" x2="5" y2="12.000000005924448" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12" y1="19.000000005924448" x2="12" y2="22.000000005924448" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12" y1="2.000000005924448" x2="12" y2="5.000000005924448" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.949747468419446" y1="16.949747474114702" x2="19.071067812019464" y2="19.071067817634685" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="4.928932187980536" y1="4.928932194216031" x2="7.050252531580554" y2="7.050252537734195" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.050252531798833" y1="16.949747474343894" x2="4.928932188289764" y2="19.071067817945732" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="19.071067811710236" y1="4.928932193895889" x2="16.949747468201167" y2="7.050252537505003" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
