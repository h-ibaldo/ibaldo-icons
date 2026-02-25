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
  <polyline points="4.974731450043691 15.000000000481123 1.974731450043691 12.000000000481123 4.974731450043691 9.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.974731450043691" y1="12.000000000481123" x2="1.974731450043691" y2="12.000000000481123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.974731450043691,6.056394887018541v-3.056394886537419c0-.552284749832324.447715250171314-1,1-1h18c.552284749832324,0,1,.447715250167676,1,1v18c0,.552284749828686-.447715250167676,1-1,1H2.974731450043691c-.552284749828686,0-1-.447715250171314-1-1v-2.943605113462581" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
