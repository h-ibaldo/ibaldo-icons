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
  viewBox="0 0 24 24.000000000000909"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon-design {className}"
  {...$$restProps}
>
  <line x1="2.999999976489562" y1="2.998779299956368" x2="20.999999976489562" y2="20.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <polyline points="15.400024390559338 15.398803714018868 18.999999976489562 9.998779299956368 12.999999976489562 9.998779299956368 12.999999976489562 1.998779299956368 8.599975562428881 8.598754885893868" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="10.999999976489562 15.998779299956368 10.999999976489562 21.998840335112618 13.400024390559338 18.398803714018868" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="6.599975562428881 11.598754885893868 4.999999976489562 13.998779299956368 8.999999976489562 13.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
