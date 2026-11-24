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
  <path d="M17 17L22 22"/>
  <path d="M9 15.578C7.234 14.805 6 13.051 6 11C6 8.238 8.238 6 11 6C13.051 6 14.805 7.234 15.578 9"/>
  <path d="M11 11L20.77 14.555C21.199 14.711 21.211 15.316 20.785 15.484L17 17L15.484 20.785C15.316 21.211 14.711 21.199 14.555 20.77Z"/>
  <path d="M19.941 10C19.445 5.5 15.633 2 11 2C6.031 2 2 6.027 2 11C2 15.633 5.5 19.441 10 19.941"/>
</svg>
