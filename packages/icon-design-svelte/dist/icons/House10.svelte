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
  <polygon points="18.999999999239662 21.000000000842192 4.999999999239662 21.000000000842192 4.999999999239662 13.000000000842192 1.999999999239662 13.000000000842192 11.999999999239662 3.000000000842192 21.999999999239662 13.000000000842192 18.999999999239662 13.000000000842192 18.999999999239662 21.000000000842192"/>
  <line x1="17.999999999239662" y1="4.000000000842192" x2="17.999999999239662" y2="9.000000000842192"/>
</svg>
