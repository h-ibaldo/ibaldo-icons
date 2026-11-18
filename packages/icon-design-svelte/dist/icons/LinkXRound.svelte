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
  <path d="M13 6.762C14.203 7.566 15 8.941 15 10.5C15 12.984 12.984 15 10.5 15L6.5 15C4.016 15 2 12.984 2 10.5C2 8.188 3.754 6.301 6 6.051"/>
  <path d="M11 11.238C9.797 10.434 9 9.059 9 7.5C9 5.016 11.016 3 13.5 3L17.5 3C19.984 3 22 5.016 22 7.5C22 9.813 20.246 11.699 18 11.949"/>
  <path d="M17 20L21 16"/>
  <path d="M17 16L21 20"/>
</svg>
