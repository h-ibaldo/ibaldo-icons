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
  <circle cx="11.000000014892066" cy="10.998779301076866" r="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="17.363952651612635" y1="17.362731937795616" x2="22.000000014892066" y2="21.998779301076866" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.000000014892066" y1="10.998779301076866" x2="15.000000014892066" y2="10.998779301076866" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.000000014892066" y1="6.998779301076866" x2="11.000000014892066" y2="14.998779301076866" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
