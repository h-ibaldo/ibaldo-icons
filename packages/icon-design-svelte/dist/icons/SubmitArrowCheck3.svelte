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
  <path d="M21.974731440100186,17.000000003885361H3.974731440100186c-1.104569499660101,0-2-.895430500338989-2-2V6.000000003885361c0-1.104569499661011.895430500339899-2,2-2h9c1.104569499670106,0,2,.895430500338989,2,2v7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="18.974731440100186 14.000000003885361 21.974731440100186 17.000000003885361 18.974731440100186 20.000000003885361" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="5.974731440100186 10.500000003885361 7.974731440100186 12.500000003885361 10.974731440100186 8.500000003885361" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
