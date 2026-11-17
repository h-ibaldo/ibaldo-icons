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
  <path d="M5.974731440099276,15.000000003885361h-3c-.552284749819592,0-1-.447715250167676-1-1V4.000000003885361c0-.552284749828686.447715250180408-1,1-1h14c.552284749830505,0,1,.447715250171314,1,1v5"/>
  <rect x="5.974731440099276" y="9.000000003885361" width="16" height="12" rx="1" ry="1"/>
  <line x1="17.974731440099276" y1="14.990000003885143" x2="17.974731440099276" y2="15.000000003885361"/>
  <line x1="17.974731440099276" y1="11.990000003885143" x2="17.974731440099276" y2="12.000000003885361"/>
  <line x1="14.974731440099276" y1="14.990000003885143" x2="14.974731440099276" y2="15.000000003885361"/>
  <line x1="11.974731440099276" y1="14.990000003885143" x2="11.974731440099276" y2="15.000000003885361"/>
  <line x1="8.974731440099276" y1="14.990000003885143" x2="8.974731440099276" y2="15.000000003885361"/>
</svg>
