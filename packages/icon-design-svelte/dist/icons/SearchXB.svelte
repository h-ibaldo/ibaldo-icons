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
  <circle cx="10.000000018382707" cy="9.99877930438015" r="8"/>
  <line x1="15.656860369943388" y1="15.65563965594265" x2="22.000000018382707" y2="21.99877930438015"/>
  <line x1="12.000000018382707" y1="7.99877930438015" x2="8.000000018382707" y2="11.99877930438015"/>
  <line x1="8.000000018382707" y1="7.99877930438015" x2="12.000000018382707" y2="11.99877930438015"/>
</svg>
