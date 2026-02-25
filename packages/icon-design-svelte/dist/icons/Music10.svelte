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
  <ellipse cx="8" cy="18.499999499998012" rx="4" ry="3.500000500000169" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21,11.999998999997842v-1.000002998709533c0-2.209137342500981-1.790859657388864-3.999997000149961-3.999996999889845-3.999997000470103h-.000009000001228c-2.761420435617765-.000000000389264-4.999994000108927-2.238573565038678-4.999994000108927-4.999994000820152v-.000004999999874,16.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
