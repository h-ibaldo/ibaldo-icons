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
  <polygon points="11.999999990796823 10.000000000448381 1.999999990796823 6.000000000448381 11.999999990796823 2.000000000448381 21.999999990796823 6.000000000448381 11.999999990796823 10.000000000448381"/>
  <polyline points="5.749999990796823 10.500000000448381 1.999999990796823 12.000000000448381 11.999999990796823 16.000000000448381 21.999999990796823 12.000000000448381 18.249999990796823 10.500000000448381"/>
  <polyline points="5.749999990796823 17.000000000448381 1.999999990796823 18.500000000448381 11.999999990796823 22.500000000448381 21.999999990796823 18.500000000448381 18.249999990796823 17.000000000448381"/>
</svg>
