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
  <line x1="7.999999990970537" y1="16.000000000715772" x2="15.999999990610377" y2="8.00000000107957"/>
  <line x1="15.999999990430297" y1="16.000000000894943" x2="7.999999991150617" y2="8.0000000009004"/>
  <circle cx="11.999999990790457" cy="12.000000000897671" r="10"/>
</svg>
