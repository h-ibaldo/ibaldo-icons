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
  <circle cx="11.974731440100186" cy="12.000000003885361" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.974731440100186,12.000000003885361v3c0,1.104569499661011-.895430500329894,2-2,2h-6c-1.104569499660101,0-2-.895430500338989-2-2v-6c0-1.104569499661011.895430500339899-2,2-2h3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="9.974731440100186 11.000000003885361 11.974731440100186 13.000000003885361 15.974731440100186 8.000000003885361" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
