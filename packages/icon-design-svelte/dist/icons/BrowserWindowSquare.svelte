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
  <rect x="1.898925794721436" y="1.99877930292314" width="20" height="20" rx="3" ry="3"/>
  <rect x="6.898925794721436" y="6.99877930292314" width="10" height="10" rx="1" ry="1"/>
  <line x1="6.898925794721436" y1="10.99877930292314" x2="16.898925794721436" y2="10.99877930292314"/>
</svg>
