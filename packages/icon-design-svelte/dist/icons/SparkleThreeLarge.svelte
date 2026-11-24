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
  <path d="M2 8.5C5.59 8.5 8.5 11.41 8.5 15"/>
  <path d="M15 8.5C11.41 8.5 8.5 11.41 8.5 15"/>
  <path d="M15 8.5C11.41 8.5 8.5 5.59 8.5 2"/>
  <path d="M2 8.5C5.59 8.5 8.5 5.59 8.5 2"/>
  <path d="M9 19C10.656 19 12 20.344 12 22"/>
  <path d="M15 19C13.344 19 12 20.344 12 22"/>
  <path d="M15 19C13.344 19 12 17.656 12 16"/>
  <path d="M9 19C10.656 19 12 17.656 12 16"/>
  <path d="M14 13.5C15.934 13.5 17.5 15.066 17.5 17"/>
  <path d="M21 13.5C19.066 13.5 17.5 15.066 17.5 17"/>
  <path d="M21 13.5C19.066 13.5 17.5 11.934 17.5 10"/>
  <path d="M14 13.5C15.934 13.5 17.5 11.934 17.5 10"/>
</svg>
