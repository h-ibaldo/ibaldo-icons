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
  <path d="M5.934 11.594L5.965 11.684C7.004 14.652 9.352 16.977 12.328 17.984"/>
  <path d="M12.402 15.59L13.926 14.789L17.922 17.188L17.336 20.113C17.199 20.789 16.762 21.363 16.145 21.668C15.742 21.871 15.281 21.945 14.832 21.883L13.531 21.695C11.172 21.359 8.949 20.398 7.09 18.91C6.324 18.297 5.625 17.598 5.012 16.828C3.523 14.973 2.563 12.746 2.223 10.391L2.039 9.086C1.973 8.637 2.047 8.18 2.25 7.773C2.559 7.16 3.133 6.719 3.809 6.586L6.734 6L9.133 9.996L8.406 10.793"/>
  <path d="M16 2L14 10"/>
  <path d="M20 2L18 10"/>
  <path d="M22 4L13 4"/>
  <path d="M21 8L12 8"/>
  <path d="M16 2L14 10"/>
  <path d="M20 2L18 10"/>
  <path d="M22 4L13 4"/>
  <path d="M21 8L12 8"/>
</svg>
