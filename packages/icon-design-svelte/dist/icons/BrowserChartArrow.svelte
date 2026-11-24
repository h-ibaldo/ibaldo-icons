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
  <rect x="1.999999993642632" y="1.998779299954549" width="20" height="20" rx="2" ry="2"/>
  <line x1="1.999999993642632" y1="7.998779299954549" x2="21.999999993642632" y2="7.998779299954549"/>
  <line x1="5.00999999364285" y1="4.998779299954549" x2="4.999999993642632" y2="4.998779299954549"/>
  <line x1="8.00999999364285" y1="4.998779299954549" x2="7.999999993642632" y2="4.998779299954549"/>
  <line x1="18.999999993642632" y1="4.998779299954549" x2="10.999999993642632" y2="4.998779299954549"/>
  <polyline points="5.999999993642632 17.998779299954549 9.999999993642632 13.998779299945454 12.999999993642632 16.998779299954549 17.999999993642632 11.998779299954549"/>
  <polyline points="14.999999993640813 11.998779299954549 17.999999993640813 11.998779299954549 17.999999993640813 14.998779299954549"/>
</svg>
