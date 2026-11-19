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
  <path d="M15 11C15 12.105 14.105 13 13 13C11.895 13 11 12.105 11 11C11 9.895 11.895 9 13 9C14.105 9 15 9.895 15 11Z"/>
  <path d="M21 21.723C21.595 21.376 22 20.738 22 20L22 4C22 2.895 21.105 2 20 2L8 2C6.895 2 6 2.895 6 4L6 10"/>
  <path d="M2 22L12 22L7 14L2 22Z"/>
  <path d="M12 22L17 22L13.5 17L11.057 20.491"/>
</svg>
