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
  <path d="M6.48 18.438C6.172 18.801 6 19.262 6 19.742L6 22L18 22L18 19.742C18 19.262 17.828 18.801 17.52 18.438L6.48 5.563C6.172 5.199 6 4.738 6 4.258L6 2L18 2L18 4.258C18 4.738 17.828 5.199 17.52 5.563"/>
  <path d="M9.691 14.691L6.48 18.438"/>
  <path d="M17.52 5.563L14.309 9.309"/>
  <path d="M11 19L13 19"/>
  <path d="M12 7L12 7"/>
</svg>
