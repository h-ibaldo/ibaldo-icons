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
  <rect x="2.025268554611102" y="2.000000000709406" width="20" height="20" rx="3" ry="3"/>
  <path d="M17.025268554611102,12.000000000709406v3c0,1.104569499661011-.895430500351722,2-2,2h-6c-1.104569499671925,0-2-.895430500338989-2-2v-6c0-1.104569499661011.895430500328075-2,2-2h3"/>
  <polyline points="10.025268554611102 11.000000000709406 12.025268554611102 13.000000000709406 16.025268554611102 8.000000000709406"/>
</svg>
