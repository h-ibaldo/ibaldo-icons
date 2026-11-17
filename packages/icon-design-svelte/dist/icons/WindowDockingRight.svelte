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
  <rect x="5.974731417777548" y="5.998779298355657" width="20" height="12" rx=".999999999997684" ry=".999999999997684" transform="translate(27.973510715414747 -3.975952119961534) rotate(89.999999997423146)"/>
  <polyline points="1.974731418182273 14.998779299121452 4.974731417782095 11.998779298717636 1.974731417372823 8.998779299121452"/>
  <line x1="21.974731417511066" y1="5.998779298088266" x2="9.974731417511066" y2="5.998779298626687"/>
</svg>
