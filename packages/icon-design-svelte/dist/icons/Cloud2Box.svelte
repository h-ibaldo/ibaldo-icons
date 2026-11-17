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
  <rect x="2.000000000020009" y="1.999999973788363" width="20" height="20" rx="5" ry="5"/>
  <path d="M16.000000000020009,11.999999999998181v-.5c0-1.104553222659888-.895446777340112-2-2-2-.431884765619543,0-.829223632810681.140075683590112-1.156127929689319.372802734360448-.36767578125-1.0859375-1.383728027340112-1.872802734360448-2.593872070310681-1.872802734360448-1.518798828119543,0-2.75,1.231201171860448-2.75,2.75v.461059570299767c-.882263183590112.386047363290345-1.5,1.264282226560681-1.5,2.288940429700233,0,1.380737304690228,1.119262695310681,2.5,2.5,2.5h7.5c1.104553222659888,0,2-.895446777340112,2-2s-.895446777340112-2-2-2Z"/>
</svg>
