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
  <path d="M3.66 17.406C4.402 18.531 5.367 19.492 6.488 20.234"/>
  <path d="M2.199 9.895C2.07 10.543 2 11.211 2 11.895C2 12.582 2.07 13.25 2.199 13.895"/>
  <path d="M6.488 3.555C5.367 4.297 4.402 5.262 3.66 6.383"/>
  <path d="M14 21.695C13.355 21.828 12.684 21.895 12 21.895C11.316 21.895 10.645 21.828 10 21.695"/>
  <path d="M17.512 20.234C20.215 18.445 22 15.383 22 11.895C22 6.375 17.523 1.895 12 1.895C11.316 1.895 10.648 1.965 10 2.098"/>
  <path d="M12 7L12 12L17 14"/>
</svg>
