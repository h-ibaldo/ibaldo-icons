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
  <line x1="6.999999977100742" y1="21.999996563434252" x2="16.999999977100742" y2="21.999996563434252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="20.999999977100742" y1="2.999996563434252" x2="2.999999977100742" y2="20.999996563434252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <polyline points="16.761901832569492 7.238094707965502 11.999999977100742 1.999996563434252 1.999999977100742 12.999996563434252 6.999999977100742 12.999996563434252 6.999999977100742 16.999996563434252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="10.999999977100742 17.999996563434252 16.999999977100742 17.999996563434252 16.999999977100742 12.999996563434252 21.999999977100742 12.999996563434252 19.142883277880173 9.857113262653002" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
