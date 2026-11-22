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
  <path d="M19 9L19 7.828C19 7.297 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.703 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22"/>
  <path d="M8 12L21 12L21 22L8 22Z"/>
  <path d="M11 14.988L11 15"/>
  <path d="M11 20.988L11 22"/>
  <path d="M18 14.988L18 15"/>
  <path d="M11 17.988L11 18"/>
  <path d="M18 17.988L18 18"/>
  <path d="M18 20.988L18 22"/>
</svg>
