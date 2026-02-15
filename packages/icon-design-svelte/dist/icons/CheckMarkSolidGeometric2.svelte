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
  <polygon points="2.949462885140747 12.000000000480213 5.949462885140747 9.000000000480213 9.949462885140747 13.000000000480213 17.949462885140747 5.000000000480213 20.949462885140747 8.000000000480213 9.949462885140747 19.000000000480213 2.949462885140747 12.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
