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
  <path d="M10 15L7 12L10 9"/>
  <path d="M14 12L7 12"/>
  <path d="M20 10C18.895 10 18 10.895 18 12C18 13.105 18.895 14 20 14C21.105 14 22 13.105 22 12C22 10.895 21.105 10 20 10Z"/>
  <path d="M19.984 6C18.16 3.574 15.27 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C15.27 22 18.16 20.426 19.984 18"/>
</svg>
