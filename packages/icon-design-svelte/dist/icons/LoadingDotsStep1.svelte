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
  <rect x="10.999999881978297" y="10.998779328575495" width="1.999999978605018" height="1.999999921429323" rx=".999402546253466" ry=".999402546253466" transform="translate(23.998778647914726 -.001221094594722) rotate(89.999997552246796)"/>
  <rect x="18.999999947934185" y="10.998779328575097" width="1.99999997860499" height="1.999999921430119" rx=".999402546133562" ry=".999402546133562" transform="translate(31.9987783751534 -8.0012211587186) rotate(89.9999975609948)"/>
  <rect x="2.999999947934185" y="10.998779328573221" width="1.99999997860499" height="1.99999992143387" rx=".99940254612814" ry=".99940254612814" transform="translate(15.998779056455868 7.998778841892505) rotate(89.99999756391297)"/>
</svg>
