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
  <circle cx="5" cy="11.999999999998181" r="3"/>
  <line x1="8" y1="11.999999999998181" x2="13" y2="11.999999999998181"/>
  <circle cx="19" cy="4.999999999998181" r="3"/>
  <circle cx="19" cy="18.999999999998181" r="3"/>
  <polyline points="17.05615234375 7.267822265617724 13 11.999999999998181 17.05615234375 16.732177734367724"/>
</svg>
