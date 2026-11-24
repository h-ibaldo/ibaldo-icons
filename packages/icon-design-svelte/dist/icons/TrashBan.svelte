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
  <path d="M8.974731450170111,22.000000000459295h-2.000000000120053c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023"/>
  <line x1="16.974731450050058" y1="6.000000000462023" x2="16.974731450050058" y2="9.000000000459295"/>
  <line x1="2.974731450050058" y1="6.000000000462023" x2="18.974731450050058" y2="6.000000000462023"/>
  <path d="M13.974731450050058,6.000000000462023v-2.35392100772242c0-.909104324453438-.7369746678296-1.646078992280309-1.646078992280309-1.646078992280309h-2.707842015440292c-.9091043244498,0-1.646078992279399.736974667826871-1.646078992279399,1.646078992280309v2.35392100772242"/>
  <circle cx="15.941799467220108" cy="17.032932035377598" r="5.032931982879632"/>
  <line x1="12.382979132789842" y1="20.591752369644382" x2="19.500619801639914" y2="13.474111701115362"/>
</svg>
