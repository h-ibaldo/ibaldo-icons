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
  <path d="M13 7.5C13 10.535 10.539 13 7.5 13C4.461 13 2 10.535 2 7.5C2 4.465 4.461 2 7.5 2C10.539 2 13 4.465 13 7.5Z"/>
  <path d="M8 9L8 6L7 6"/>
  <path d="M8.961 16C10.129 17.723 12.258 18.906 14.73 18.988C16.211 20.141 18.383 21 21 21C20.344 20.344 19.691 19.242 19.316 17.719C20.949 16.617 22 14.914 22 13C22 9.98 19.391 7.488 16 7.07"/>
</svg>
