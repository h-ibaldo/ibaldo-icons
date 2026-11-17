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
  <line x1="12.035268553439892" y1="4.999996485714291" x2="12.025268553439673" y2="4.999996485714291"/>
  <line x1="12.035268553439892" y1="11.999996485714291" x2="12.025268553439673" y2="11.999996485714291"/>
  <line x1="12.035268553439892" y1="18.999996485714291" x2="12.025268553439673" y2="18.999996485714291"/>
</svg>
