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
  <path d="M9.999999993639904,21.997565472713177h-1c-1.104569499660101,0-2-.895430500338989-2-2v-11c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16.999999993639904" cy="16.997565472713177" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
  <line x1="16.999999993639904" y1="14.997565472713177" x2="16.999999993639904" y2="18.997565472713177" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="18.999999993639904" y1="16.997565472622227" x2="14.999999993639904" y2="16.997565472801398" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <path d="M6.999999993639904,16.997565472713177h-3c-1.104569499660101,0-2-.895430500338989-2-2V3.997565472713177c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
