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
  <path d="M21 5L18 2L15 5"/>
  <path d="M18 8L18 2"/>
  <path d="M5 17.445C3.809 16.754 3 15.477 3 14C3 11.793 4.789 10 7 10L12 10C14.211 10 16 11.793 16 14C16 15.859 14.723 17.414 13 17.859"/>
  <path d="M19 14.555C20.191 15.246 21 16.523 21 18C21 20.207 19.211 22 17 22L12 22C9.789 22 8 20.207 8 18C8 16.141 9.277 14.586 11 14.141"/>
</svg>
