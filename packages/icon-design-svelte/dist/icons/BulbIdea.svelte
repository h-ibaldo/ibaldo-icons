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
  <path d="M5,8.999999999998181c0,1.860514322919698.727647569439796,3.548366970489951,1.912832754629562,4.799994574650555,1.273417640260959,1.344806440469256,2.087167245370438,3.057412944159296,2.087167245370438,4.909465008449843v.290540416899603h6v-.290540416899603c0-1.852052064290547.813749605109479-3.564658567980587,2.087167245370438-4.909465008449843,1.185185185189766-1.251627604160603,1.912832754629562-2.939480251730856,1.912832754629562-4.799994574650555" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19,8.999999999998181c0-3.865966796869543-3.134033203130457-7-7-7-3.865966796880457,0-7,3.134033203130457-7,7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10" y1="21.999999999998181" x2="14" y2="21.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
