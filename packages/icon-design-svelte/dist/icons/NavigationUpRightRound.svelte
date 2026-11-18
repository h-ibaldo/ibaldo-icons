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
  <path d="M18.383 3.082L4.488 7.051C2.578 7.598 2.48 10.27 4.352 10.949L9.547 12.84C10.297 13.113 10.887 13.703 11.16 14.457L13.051 19.648C13.727 21.52 16.402 21.426 16.949 19.512L20.918 5.617C21.359 4.07 19.93 2.641 18.383 3.082Z"/>
</svg>
