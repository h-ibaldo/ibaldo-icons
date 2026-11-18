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
  <path d="M10.805 17.656L8.684 19.777C7.121 21.34 4.586 21.34 3.023 19.777C1.465 18.215 1.465 15.684 3.023 14.121L5.145 12"/>
  <path d="M15 8L18 8C20.211 8 22 9.789 22 12C22 14.211 20.211 16 18 16L15 16"/>
  <path d="M3.07 7.336L4.957 8"/>
  <path d="M12 3.063L11.336 4.949"/>
  <path d="M6.473 2.977L7.336 4.781"/>
</svg>
