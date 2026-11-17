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
  <path d="M15 10L8.828 17.172C7.723 18.277 7.723 20.066 8.828 21.172C9.934 22.277 11.723 22.277 12.828 21.172L20.551 12.449C22.484 10.516 22.484 7.383 20.551 5.449C18.617 3.516 15.484 3.516 13.551 5.449L7 13"/>
  <path d="M2 5L8 5"/>
  <path d="M5 2L5 8"/>
</svg>
