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
  <rect x="1.999999993642632" y="1.998779299956368" width="20" height="20" rx="2" ry="2"/>
  <line x1="1.999999993642632" y1="7.998779299956368" x2="21.999999993642632" y2="7.998779299956368"/>
  <line x1="5.00999999364285" y1="4.998779299956368" x2="4.999999993642632" y2="4.998779299956368"/>
  <line x1="8.00999999364285" y1="4.998779299956368" x2="7.999999993642632" y2="4.998779299956368"/>
  <line x1="11.00999999364285" y1="4.998779299956368" x2="10.999999993642632" y2="4.998779299956368"/>
  <polygon points="9.999999993642632 11.998779299956368 9.999999993642632 17.998779299956368 14.999999993642632 14.998779299956368 9.999999993642632 11.998779299956368"/>
</svg>
