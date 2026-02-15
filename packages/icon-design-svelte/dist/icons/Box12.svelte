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
  <line x1="12" y1="8.999999999998181" x2="20" y2="5.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="12 8.999999999998181 14 12.999999999998181 22 9.999999999998181 20 5.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="4 5.999999999998181 2 9.999999999998181 4 10.749999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12" y1="8.999999999998181" x2="12" y2="20.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="4" y1="5.999999999998181" x2="12" y2="8.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="20 5.999999999998181 12 2.999999999998181 4 5.999999999998181 4 17.999999999998181 12 20.999999999998181 20 17.999999999998181 20 10.749999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
