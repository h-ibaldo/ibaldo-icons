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
  <path d="M22 12A10 10 0 1 1 2 12A10 10 0 1 1 22 12Z"/>
  <path d="M17.5 12.864A5.537 5.537 0 1 1 11.136 6.5"/>
  <path d="M17.5 12.864A4.922 4.922 0 0 1 11.136 6.5"/>
</svg>
