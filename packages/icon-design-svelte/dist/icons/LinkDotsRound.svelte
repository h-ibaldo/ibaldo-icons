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
  <path d="M13 11.762C14.203 12.566 15 13.941 15 15.5C15 17.984 12.984 20 10.5 20L6.5 20C4.016 20 2 17.984 2 15.5C2 13.188 3.754 11.301 6 11.051"/>
  <path d="M11 16.238C9.797 15.434 9 14.059 9 12.5C9 10.016 11.016 8 13.5 8L17.5 8C19.984 8 22 10.016 22 12.5C22 14.813 20.246 16.699 18 16.949"/>
  <path d="M3 4L3 4"/>
  <path d="M7 4L7 4"/>
</svg>
