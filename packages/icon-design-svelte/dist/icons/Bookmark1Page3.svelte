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
  <polyline points="2.000000026697307 1.999999999998181 22.000000026697307 1.999999999998181 22.000000026697307 21.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="11.000000026697307 1.999999999998181 11.000000026697307 13.999999999998181 14.000000026697307 11.999999999998181 17.000000026697307 13.999999999998181 17.000000026697307 1.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.000000026697307" y1="9.999999999998181" x2="7.000000026697307" y2="9.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.000000026697307" y1="13.999999999998181" x2="7.000000026697307" y2="13.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.000000026697307" y1="17.999999999998181" x2="17.000000026697307" y2="17.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.000000026697307" y1="21.999999999998181" x2="17.000000026697307" y2="21.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
