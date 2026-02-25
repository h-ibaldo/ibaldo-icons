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
  <polyline points="9.025268549155953 4.998782739599847 12.025268549155953 1.998782739599847 15.025268549155953 4.998782739599847" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.025268549155953" y1="9.998782739599847" x2="12.025268549155953" y2="1.998782739599847" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="12.025268549155953" cy="17.998782739599847" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
