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
  <path d="M14 2L14 5"/>
  <path d="M12 2L16 2"/>
  <path d="M16 10L14 13"/>
  <path d="M22 6L21 7"/>
  <path d="M2 13L8 13"/>
  <path d="M6 21L8 21"/>
  <path d="M4 17L8 17"/>
  <path d="M12 20.738C12.641 20.902 13.309 21 14 21C18.418 21 22 17.418 22 13C22 8.582 18.418 5 14 5C11.039 5 8.465 6.609 7.078 9"/>
</svg>
