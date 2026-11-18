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
  <path d="M3.66 17.512C4.402 18.633 5.367 19.598 6.488 20.34"/>
  <path d="M2.199 10C2.07 10.645 2 11.316 2 12C2 12.684 2.07 13.355 2.199 14"/>
  <path d="M6.488 3.66C5.367 4.402 4.402 5.367 3.66 6.488"/>
  <path d="M20.34 17.512C19.598 18.633 18.633 19.598 17.512 20.34"/>
  <path d="M21.801 10C21.93 10.645 22 11.316 22 12C22 12.684 21.93 13.355 21.801 14"/>
  <path d="M14 2.199C13.355 2.07 12.684 2 12 2C11.316 2 10.645 2.07 10 2.199"/>
  <path d="M14 21.797C13.355 21.93 12.684 22 12 22C11.316 22 10.645 21.93 10 21.797"/>
  <path d="M17.512 3.66C18.633 4.402 19.598 5.367 20.34 6.488"/>
  <path d="M12 7L12 12L17 14"/>
</svg>
