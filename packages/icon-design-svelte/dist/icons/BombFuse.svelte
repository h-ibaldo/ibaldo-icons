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
  <path d="M11 8.293L11 6L7 6L7 8.293C4.109 9.156 2 11.828 2 15C2 18.867 5.133 22 9 22C12.867 22 16 18.867 16 15C16 11.828 13.891 9.156 11 8.293Z"/>
  <path d="M21 8L22 9"/>
  <path d="M21 5L22 4"/>
  <path d="M18 8L17 9"/>
  <path d="M18 5L16.758 3.758C15.633 2.633 14.105 2 12.516 2C10.574 2 9 3.574 9 5.516L9 6"/>
</svg>
