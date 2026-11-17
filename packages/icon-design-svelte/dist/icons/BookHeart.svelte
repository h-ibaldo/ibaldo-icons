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
  <path d="M20 18L6 18C4.895 18 4 18.895 4 20C4 21.105 4.895 22 6 22L20 22"/>
  <path d="M20 18L20 2L6 2C4.895 2 4 2.895 4 4"/>
  <path d="M4 4L4 20"/>
  <path d="M11.293 13.293L8.5 10.5C7.672 9.672 7.672 8.328 8.5 7.5C9.328 6.672 10.672 6.672 11.5 7.5L12 8L12.5 7.5C13.328 6.672 14.672 6.672 15.5 7.5C16.328 8.328 16.328 9.672 15.5 10.5L12.707 13.293C12.316 13.684 11.684 13.684 11.293 13.293Z"/>
</svg>
