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
  <path d="M3 6C3 7.656 4.344 9 6 9C7.656 9 9 7.656 9 6C9 4.344 7.656 3 6 3C4.344 3 3 4.344 3 6Z"/>
  <path d="M15 18C15 19.656 16.344 21 18 21C19.656 21 21 19.656 21 18C21 16.344 19.656 15 18 15C16.344 15 15 16.344 15 18Z"/>
  <path d="M6 9L6 21"/>
  <path d="M6 9C6 13.969 10.031 18 15 18"/>
</svg>
