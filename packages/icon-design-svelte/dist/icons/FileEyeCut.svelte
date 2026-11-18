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
  <path d="M19 9L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L7 22"/>
  <path d="M15 18L15 18C14.448 18 14 17.552 14 17L14 17C14 16.448 14.448 16 15 16L15 16C15.552 16 16 16.448 16 17L16 17C16 17.552 15.552 18 15 18Z"/>
  <path d="M15 12C11.83 12 9.155 14.109 8.294 17C9.155 19.891 11.83 22 15 22C18.17 22 20.845 19.891 21.706 17C20.845 14.109 18.17 12 15 12Z"/>
</svg>
