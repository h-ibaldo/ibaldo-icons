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
  <rect x="7.999999977100742" y="18.999996563434252" width="8" height="3"/>
  <line x1="20.999999977100742" y1="2.999996563434252" x2="2.999999977100742" y2="20.999996563434252"/>
  <g>
  <polyline points="14.64703366851063 4.352962872028002 11.999999977100742 1.999996563434252 2.999999977100742 9.999996563434252 7.999999977100742 9.999996563434252 7.999999977100742 10.999996563434252"/>
  <polyline points="7.999999977100742 15.999996563434252 15.999999977100742 15.999996563434252 15.999999977100742 9.999996563434252 20.999999977100742 9.999996563434252 17.294128395069492 6.705868145465502"/>
  </g>
</svg>
