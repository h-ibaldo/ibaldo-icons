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
  <path d="M15 8L6.828 17.172C5.723 18.277 5.723 20.066 6.828 21.172C7.934 22.277 9.723 22.277 10.828 21.172L20.551 10.449C22.484 8.516 22.484 5.383 20.551 3.449C18.617 1.516 15.484 1.516 13.551 3.449L5 13"/>
  <path d="M2 4L4 6L8 2"/>
</svg>
