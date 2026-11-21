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
  <path d="M18 22L6 2"/>
  <path d="M4 4L4 22"/>
  <path d="M4 16L6.113 14.973C7.379 14.359 8.859 14.371 10.113 15C11.293 15.59 12.668 15.645 13.883 15.148"/>
  <path d="M17.066 14.645C17.52 14.73 17.961 14.891 18.375 15.117L20 16L20 6L18.07 5.012C16.824 4.375 15.352 4.371 14.102 5C13.254 5.426 12.305 5.566 11.387 5.422"/>
  <path d="M7.535 4.559C7.016 4.617 6.504 4.766 6.023 5.004L4 6"/>
</svg>
