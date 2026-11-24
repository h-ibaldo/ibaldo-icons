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
  <path d="M7 17L2 22"/>
  <path d="M15 15.578C16.766 14.805 18 13.051 18 11C18 8.238 15.762 6 13 6C10.949 6 9.195 7.234 8.422 9"/>
  <path d="M13 11L3.23 14.555C2.801 14.711 2.789 15.316 3.215 15.484L7 17L8.516 20.785C8.684 21.211 9.289 21.199 9.445 20.77Z"/>
  <path d="M4.059 10C4.555 5.5 8.367 2 13 2C17.969 2 22 6.027 22 11C22 15.633 18.5 19.441 14 19.941"/>
</svg>
