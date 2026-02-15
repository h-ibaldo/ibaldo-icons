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
  <path d="M15.527343744516656,5.000000000480213c-.772216796875-1.764404296875-2.5286865234375-3-4.577880859375-3-2.761474609375,0-5,2.23858642578125-5,5v3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.949462885141656,22.000000000480213H3.949462885141656c-.552284749830505,0-1-.447715250171314-1-1v-10c0-.552284749832324.447715250169495-1,1-1h14.000000000002728c.552284749830505,0,1,.447715250167676,1,1v3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="14.949462885141656 20.000000006810296 16.949462885141656 22.000000000480213 20.949462885141656 18.000000000662112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
