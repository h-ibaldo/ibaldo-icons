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
  <path d="M9 10L12 7L15 10"/>
  <path d="M12 14L12 7"/>
  <path d="M14 20C14 18.895 13.105 18 12 18C10.895 18 10 18.895 10 20C10 21.105 10.895 22 12 22C13.105 22 14 21.105 14 20Z"/>
  <path d="M18 19.984C20.426 18.16 22 15.27 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 15.27 3.574 18.16 6 19.984"/>
</svg>
