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
  <circle cx="4" cy="11.999999999998181" r="2"/>
  <line x1="6" y1="11.999999999998181" x2="13" y2="11.999999999998181"/>
  <circle cx="20" cy="3.999999999998181" r="2"/>
  <circle cx="20" cy="19.999999999998181" r="2"/>
  <polyline points="18.6884765625 5.498901367188409 13 11.999999999998181 18.6884765625 18.501098632808862"/>
</svg>
