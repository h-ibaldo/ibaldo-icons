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
  <polyline points="11.999999993611709 21.998779299956368 1.999999993611709 21.998779299956368 1.999999993611709 1.998779299956368 10.999999993611709 1.998779299956368 10.999999993611709 5.998779299956368 21.999999993611709 5.998779299956368 21.999999993611709 11.998779299956368"/>
  <line x1="21.999999993611709" y1="1.998779299956368" x2="14.999999993611709" y2="1.998779299956368"/>
  <polyline points="21.999999993611709 18.998779299956368 18.999999993611709 21.998779299956368 15.999999993611709 18.998779299956368"/>
  <line x1="18.999999993611709" y1="14.998779299956368" x2="18.999999993611709" y2="21.998779299956368"/>
</svg>
