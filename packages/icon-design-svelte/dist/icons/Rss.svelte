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
  <path d="M4 18C4 16.895 4.895 16 6 16C7.105 16 8 16.895 8 18C8 19.105 7.105 20 6 20C4.895 20 4 19.105 4 18Z"/>
  <path d="M5 10C9.969 10 14 14.031 14 19"/>
  <path d="M5 4C13.285 4 20 10.715 20 19"/>
</svg>
