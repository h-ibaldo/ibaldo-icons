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
  <path d="M22.000000000090949,11.000000000896762l-.000000000811269,9c-.000000000049113.552284749828686-.447715250260444.999999999959982-1.00000000008913.999999999909051l-11-.000000000985892"/>
  <path d="M18.00000000044929,7.000000000536602l-.00000000080945,9c-.000000000049113.552284749832324-.447715250260444.999999999959982-1.00000000008913.999999999909051l-11-.000000000985892"/>
  <rect x="2.00000000036016" y="2.99999999963984" width="12" height="10" rx=".999999999999079" ry=".999999999999079" transform="translate(16.000000000001439 15.999999999998559) rotate(-180)"/>
</svg>
