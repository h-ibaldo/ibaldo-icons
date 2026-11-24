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
  <path d="M6 8L18 8C18.551 8 19 8.449 19 9L19 13C19 15.762 16.762 18 14 18L10 18C7.238 18 5 15.762 5 13L5 9C5 8.449 5.449 8 6 8Z"/>
  <path d="M7 8L7 3.5C7 2.672 7.672 2 8.5 2C9.328 2 10 2.672 10 3.5L10 8"/>
  <path d="M14 8L14 3.5C14 2.672 14.672 2 15.5 2C16.328 2 17 2.672 17 3.5L17 8"/>
  <path d="M10 18L10 22"/>
  <path d="M14 18L14 22"/>
</svg>
