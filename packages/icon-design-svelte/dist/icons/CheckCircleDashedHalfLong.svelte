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
  <path d="M2.52 8.73C2.188 9.727 2 10.789 2 11.895C2 13.004 2.188 14.063 2.52 15.059"/>
  <path d="M10 2.098C7.836 2.535 5.934 3.68 4.523 5.27"/>
  <path d="M4.523 18.523C5.934 20.113 7.836 21.254 10 21.695"/>
  <path d="M14 21.695C18.563 20.77 22 16.734 22 11.895C22 7.059 18.563 3.023 14 2.098"/>
  <path d="M8 12L11 15L16 9"/>
</svg>
