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
  <path d="M19 9L20.781 7.219"/>
  <path d="M7.219 20.781C8.637 21.559 10.27 22 12 22C17.523 22 22 17.523 22 12C22 10.266 21.559 8.637 20.781 7.219"/>
  <path d="M16.781 3.219C15.363 2.441 13.73 2 12 2C6.477 2 2 6.477 2 12C2 13.734 2.441 15.363 3.219 16.781"/>
  <path d="M3.219 16.781L5 15"/>
  <path d="M9 7L9 14C9 14.551 9.445 15 10 15L17 15"/>
  <path d="M15 12L15 10C15 9.449 14.555 9 14 9L12 9"/>
  <path d="M9 9L7 9"/>
  <path d="M15 17L15 15"/>
</svg>
