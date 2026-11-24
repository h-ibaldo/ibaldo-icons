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
  <path d="M20 12L20 12"/>
  <path d="M20 12L20 12"/>
  <path d="M19.191 8.492L19.191 8.492"/>
  <path d="M16.926 5.695L16.926 5.695"/>
  <path d="M19.309 15.254L19.309 15.254"/>
  <path d="M13 22L11 20L13 18"/>
  <path d="M12 20C15.262 20 18.059 18.047 19.305 15.25"/>
  <path d="M4 12L4 12"/>
  <path d="M4 12L4 12"/>
  <path d="M4.809 15.508L4.809 15.508"/>
  <path d="M7.074 18.305L7.074 18.305"/>
  <path d="M4.691 8.746L4.691 8.746"/>
  <path d="M11 2L13 4L11 6"/>
  <path d="M12 4C8.738 4 5.941 5.953 4.695 8.75"/>
</svg>
