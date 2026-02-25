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
  <line x1="18" y1="8.999999973497324" x2="17" y2="7.999999973497324" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="15 12.999999973497324 11 1.999999973497324 22 5.999999973497324 18 8.999999973497324 15 12.999999973497324" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9,7.812988254747324c-1.538635253909888.894287109360448-2.645812988279431,2.448608398441138-2.924255371099207,4.280151367191138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.761413574211474,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425788526,5-5,0-1.630615234389552-.791442871099207-3.062866210948414-2-3.973388671889552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
