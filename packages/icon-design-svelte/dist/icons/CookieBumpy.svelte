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
  <path d="M21 13C18.238 13 16 10.762 16 8C13.238 8 11 5.762 11 3C11 2.672 11.035 2.355 11.098 2.047C5.996 2.504 2 6.781 2 12C2 17.523 6.477 22 12 22C17.219 22 21.496 18.004 21.953 12.902C21.645 12.965 21.328 13 21 13Z"/>
  <path d="M8 9C8 9.551 7.555 10 7 10C6.445 10 6 9.551 6 9C6 8.449 6.445 8 7 8C7.555 8 8 8.449 8 9Z"/>
  <path d="M12 17C12 17.551 11.555 18 11 18C10.445 18 10 17.551 10 17C10 16.449 10.445 16 11 16C11.555 16 12 16.449 12 17Z"/>
  <path d="M11 12L11 12"/>
  <path d="M7 14L7 14"/>
  <path d="M16 16L16 16"/>
</svg>
