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
  <path d="M14 5C14 6.105 13.105 7 12 7C10.895 7 10 6.105 10 5C10 3.895 10.895 3 12 3C13.105 3 14 3.895 14 5Z"/>
  <path d="M14 19C14 20.105 13.105 21 12 21C10.895 21 10 20.105 10 19C10 17.895 10.895 17 12 17C13.105 17 14 17.895 14 19Z"/>
  <path d="M3 12L21 12"/>
</svg>
