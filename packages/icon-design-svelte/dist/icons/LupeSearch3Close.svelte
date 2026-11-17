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
  <circle cx="9.000000018382707" cy="8.99877930438015" r="7.000000000000001" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="22.000000018382707" y1="21.99877930438015" x2="14.000000018382707" y2="13.99877930438015" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.000000018382707" y1="10.99877930438015" x2="11.000000018382707" y2="6.99877930438015" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.000000018202627" y1="10.998779304562049" x2="7.000000018562787" y2="6.998779304201889" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
