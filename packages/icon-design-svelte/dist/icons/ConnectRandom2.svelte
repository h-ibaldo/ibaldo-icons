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
  <circle cx="4" cy="9.999999999998181" r="2"/>
  <circle cx="14" cy="18.999999999998181" r="2"/>
  <circle cx="20" cy="4.999999999998181" r="2"/>
  <line x1="14.78759765625" y1="17.162109374998181" x2="19.21240234375" y2="6.837890624998181"/>
  <line x1="5.481201171880457" y1="11.333007812498181" x2="12.518798828130457" y2="17.666992187498181"/>
</svg>
