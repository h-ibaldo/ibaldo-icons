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
  <path d="M12 3L12 8"/>
  <path d="M2 2L22 22"/>
  <path d="M18 7.707C19.246 9.117 20 10.973 20 13C20 13.734 19.902 14.445 19.715 15.121"/>
  <path d="M18.129 18.141C16.66 19.891 14.461 21 12 21C7.582 21 4 17.418 4 13C4 10.973 4.754 9.117 6 7.707"/>
</svg>
