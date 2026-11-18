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
  <path d="M18 19L20 21"/>
  <path d="M6 19L4 21"/>
  <path d="M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z"/>
  <path d="M9 13L15 13"/>
  <path d="M19.203 9.539C20.27 8.938 21 7.809 21 6.5C21 4.566 19.434 3 17.5 3C15.984 3 14.707 3.969 14.219 5.316"/>
  <path d="M9.781 5.32C9.297 3.969 8.016 3 6.5 3C4.566 3 3 4.566 3 6.5C3 7.809 3.73 8.938 4.797 9.539"/>
</svg>
