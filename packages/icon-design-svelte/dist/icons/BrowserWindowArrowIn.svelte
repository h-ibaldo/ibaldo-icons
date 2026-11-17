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
  <path d="M1.999999993642632,17.075561526518868V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2H6.999999993642632"/>
  <line x1="1.999999993642632" y1="7.998779299956368" x2="21.999999993642632" y2="7.998779299956368"/>
  <line x1="5.00999999364285" y1="4.921997073393868" x2="4.999999993642632" y2="4.921997073393868"/>
  <line x1="8.00999999364285" y1="4.921997073393868" x2="7.999999993642632" y2="4.921997073393868"/>
  <line x1="19" y1="4.921997073393868" x2="10.999999993642632" y2="4.921997073393868"/>
  <polyline points="6.999999993642632 12.998779299956368 10.999999993642632 12.998779299956368 10.999999993642632 16.998779299956368"/>
  <line x1="1.999999993642632" y1="21.998779299956368" x2="10.999999993642632" y2="12.998779299956368"/>
</svg>
