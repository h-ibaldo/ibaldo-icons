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
  <rect x="1.999999993269739" y="2.998779299956368" width="20" height="18" rx="1.000000000002264" ry="1.000000000002264" transform="translate(23.9999999860011 23.997558600451168) rotate(-180)"/>
  <path d="M21.999999993269739,9.299987796050118c-5.877075195308862,1.193115234375-10.505676269529431,5.82171630859375-11.698791503909888,11.69879150390625"/>
  <circle cx="8.499999993269739" cy="9.498779299956368" r="2.5"/>
</svg>
