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
  <path d="M3 18L15 18"/>
  <path d="M3 6L15 6"/>
  <path d="M15 9.922L13 9.922C12.449 9.922 12 10.367 12 10.922L12 12.922C12 13.473 12.449 13.922 13 13.922L15 13.922L18.375 16.621C19.031 17.145 20 16.68 20 15.84L20 8C20 7.164 19.031 6.695 18.375 7.223Z"/>
  <path d="M21 11L21 13"/>
  <path d="M15 18L15 20C15 21.105 14.105 22 13 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13 2C14.105 2 15 2.895 15 4L15 6"/>
</svg>
