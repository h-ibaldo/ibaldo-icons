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
  <rect x="1.999999994179234" y="1.998779300327442" width="20" height="19.999999999192369" rx="1.000000000004843" ry="1.000000000004843" transform="translate(23.99999998782009 23.997558600385684) rotate(-180)"/>
  <circle cx="7.999999994000063" cy="7.998779300148271" r="1.99999999981992"/>
  <path d="M21.667358392260212,21.732666018240707l-7.538776403320298-7.590656359290733c-1.173214568780168-1.181288335246791-3.083949421459693-1.181288335246791-4.25716399023986,0l-7.538776403320298,7.590656359290733"/>
</svg>
