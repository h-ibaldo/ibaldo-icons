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
  <path d="M2 20.461L2 22L3.539 22C4.969 22 6.203 20.992 6.48 19.59L7 17L4.41 17.52C3.008 17.797 2 19.031 2 20.461Z"/>
  <path d="M12 18L16.074 14.48C19.254 11.59 21.293 7.656 21.824 3.395L22 2L20.605 2.176C16.344 2.707 12.41 4.746 9.52 7.926L6 12Z"/>
  <path d="M12 6L18 12"/>
  <path d="M17 14L18 18L13 22L12 18"/>
  <path d="M10 7L6 6L2 11L6 12"/>
</svg>
