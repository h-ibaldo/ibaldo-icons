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
  <polyline points="22.000000000224645 9.032754076844867 22.000000000224645 22.032754075946286 2.000000000224645 22.032754075946286 2.000000000224645 9.032754076844867"/>
  <polyline points="21.999999999821739 9.032754077747086 12.000000000633008 2.032754075946286 1.999999999821739 9.032754075946286"/>
  <polyline points="15.000000000224645 9.032754075946286 12.00000000063028 7.032754075946286 9.000000000224645 9.032754075946286"/>
  <line x1="12.000000000224645" y1="12.032754075946286" x2="12.000000000224645" y2="7.032754075946286"/>
  <polyline points="6.000000000224645 12.832802904074924 12.000000000224645 17.032754075946286 18.000000000224645 12.832802904074924"/>
</svg>
