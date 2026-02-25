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
  <rect x="2.025268558149946" y="3.998782736171052" width="20" height="16.000000000003638" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.525268558149946,8.498782736171052c-1.93300374349019,0-3.5,1.566996256511629-3.5,3.5,0,1.933003743492009,1.56699625650981,3.5,3.5,3.5s3.5-1.566996256507991,3.5-3.5h-3.5v-3.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.025268558149946" y1="8.998782736171052" x2="18.025268558149946" y2="8.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.025268558149946" y1="11.998782736171052" x2="18.025268558149946" y2="11.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.025268558149946" y1="14.998782736171052" x2="18.025268558149946" y2="14.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
