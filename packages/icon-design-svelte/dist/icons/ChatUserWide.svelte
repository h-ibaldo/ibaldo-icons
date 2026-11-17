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
  <path d="M14.5 9C14.5 10.383 13.383 11.5 12 11.5C10.617 11.5 9.5 10.383 9.5 9C9.5 7.617 10.617 6.5 12 6.5C13.383 6.5 14.5 7.617 14.5 9Z"/>
  <path d="M16 14.5C16 12.844 14.656 11.5 13 11.5L11 11.5C9.344 11.5 8 12.844 8 14.5"/>
  <path d="M14.5 3L9.5 3C5.359 3 2 6.355 2 10.5C2 13.766 4.09 16.531 7 17.563L7 22L11.668 18L14.5 18C18.645 18 22 14.645 22 10.5C22 6.355 18.645 3 14.5 3Z"/>
</svg>
