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
  <path d="M3 6C4.656 6 6 7.344 6 9"/>
  <path d="M9 6C7.344 6 6 7.344 6 9"/>
  <path d="M9 6C7.344 6 6 4.656 6 3"/>
  <path d="M3 6C4.656 6 6 4.656 6 3"/>
  <path d="M15 6C16.656 6 18 7.344 18 9"/>
  <path d="M21 6C19.344 6 18 7.344 18 9"/>
  <path d="M21 6C19.344 6 18 4.656 18 3"/>
  <path d="M15 6C16.656 6 18 4.656 18 3"/>
  <path d="M8 13C9.656 13 11 14.344 11 16"/>
  <path d="M14 13C12.344 13 11 14.344 11 16"/>
  <path d="M14 13C12.344 13 11 11.656 11 10"/>
  <path d="M8 13C9.656 13 11 11.656 11 10"/>
  <path d="M15 18C16.656 18 18 19.344 18 21"/>
  <path d="M21 18C19.344 18 18 19.344 18 21"/>
  <path d="M21 18C19.344 18 18 16.656 18 15"/>
  <path d="M15 18C16.656 18 18 16.656 18 15"/>
  <path d="M2 19C3.656 19 5 20.344 5 22"/>
  <path d="M8 19C6.344 19 5 20.344 5 22"/>
  <path d="M8 19C6.344 19 5 17.656 5 16"/>
  <path d="M2 19C3.656 19 5 17.656 5 16"/>
</svg>
