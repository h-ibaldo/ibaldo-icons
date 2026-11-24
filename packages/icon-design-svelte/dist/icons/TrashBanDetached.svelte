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
  <path d="M8.97473145010008,22.000000000459295h-2.000000000020009c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023"/>
  <line x1="15.97473145010008" y1="6.000000000462023" x2="15.97473145010008" y2="9.000000000459295"/>
  <line x1="2.974731450080071" y1="6.000000000462023" x2="17.97473145010008" y2="6.000000000462023"/>
  <line x1="7.97473145010008" y1="2.000000000459295" x2="12.97473145010008" y2="2.000000000459295"/>
  <circle cx="15.941799467210103" cy="17.032932035377598" r="5.032931982879632"/>
  <line x1="12.382979132779838" y1="20.591752369644382" x2="19.500619801639914" y2="13.474111701115362"/>
</svg>
