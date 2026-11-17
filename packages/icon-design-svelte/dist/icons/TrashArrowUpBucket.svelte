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
  <path d="M21 8L3 8C2.449 8 2 7.551 2 7L2 4C2 3.449 2.449 3 3 3L21 3C21.551 3 22 3.449 22 4L22 7C22 7.551 21.551 8 21 8Z"/>
  <path d="M20 8L18.262 19.305C18.109 20.281 17.27 21 16.285 21L7.715 21C6.73 21 5.891 20.281 5.738 19.305L4 8"/>
  <path d="M12 12L12 17"/>
  <path d="M10 14L12 12L14 14"/>
</svg>
