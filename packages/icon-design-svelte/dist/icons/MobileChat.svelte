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
  <path d="M19,13.998779303362426h-5l-3,2v-2h-2c-1.104569499659192,0-2-.895430500338989-2-2v-1c0-1.104569499661011.895430500340808-2,2-2h10c1.104569499670106,0,2,.895430500338989,2,2v1c0,1.104569499661011-.895430500329894,2-2,2Z"/>
  <path d="M17,16.998779303362426v3c0,1.104569499661011-.895430500329894,2-2,2H5c-1.104569499659192,0-2-.895430500338989-2-2V3.998779303362426c0-1.104569499661011.895430500340808-2,2-2h10c1.104569499670106,0,2,.895430500338989,2,2v5"/>
  <line x1="3" y1="4.998779303362426" x2="17" y2="4.998779303362426"/>
  <line x1="3" y1="18.998779303362426" x2="17" y2="18.998779303362426"/>
</svg>
