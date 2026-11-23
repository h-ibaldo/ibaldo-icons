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
  <path d="M14 2L7 9L15 17L22 10Z"/>
  <path d="M3 22L21 22"/>
  <path d="M14.5 16.5L11.414 19.586C10.633 20.367 9.367 20.367 8.586 19.586L4.414 15.414C3.633 14.633 3.633 13.367 4.414 12.586L7.5 9.5"/>
</svg>
