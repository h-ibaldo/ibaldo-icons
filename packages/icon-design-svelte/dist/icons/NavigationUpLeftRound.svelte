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
  <path d="M5.617 3.082L19.512 7.051C21.422 7.598 21.52 10.27 19.652 10.949L14.453 12.84C13.703 13.113 13.113 13.703 12.84 14.457L10.949 19.648C10.273 21.52 7.598 21.426 7.051 19.512L3.082 5.617C2.641 4.07 4.07 2.641 5.617 3.082Z"/>
</svg>
