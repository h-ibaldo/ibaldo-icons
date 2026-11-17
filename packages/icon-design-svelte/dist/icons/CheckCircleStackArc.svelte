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
  <path d="M17 9.5C17 13.641 13.645 17 9.5 17C5.355 17 2 13.641 2 9.5C2 5.359 5.355 2 9.5 2C13.645 2 17 5.359 17 9.5Z"/>
  <path d="M6.5 9.5L8.5 11.5L12.5 7.5"/>
  <path d="M20.484 10C21.434 11.254 22 12.809 22 14.5C22 18.641 18.641 22 14.5 22C12.809 22 11.254 21.434 10 20.488"/>
</svg>
