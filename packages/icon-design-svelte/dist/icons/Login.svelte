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
  <polyline points="10.974731450043691 15.000000000481123 7.974731450040053 12.000000000479304 10.974731450043691 9.000000000481123"/>
  <line x1="20.974731450043691" y1="12.000000000481123" x2="7.974731450040053" y2="12.000000000479304"/>
  <path d="M15.974731450040053,17.000000000481123v4c0,.552284749828686-.447715250167676,1-1,1H3.974731450040053c-.552284749828686,0-1-.447715250171314-1-1V3.000000000481123c0-.552284749832324.447715250171314-1,1-1h11c.552284749832324,0,1,.447715250167676,1,1v4"/>
</svg>
