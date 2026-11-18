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
  <path d="M19.5 13.5C19.5 17.918 15.918 21.5 11.5 21.5C7.082 21.5 3.5 17.918 3.5 13.5C3.5 9.082 7.082 5.5 11.5 5.5C15.918 5.5 19.5 9.082 19.5 13.5Z"/>
  <path d="M11.5 8.5C14.262 8.5 16.5 10.738 16.5 13.5"/>
  <path d="M9.5 2.5L13.5 2.5"/>
  <path d="M11.5 8.5L11.5 13.5L16.5 13.5"/>
  <path d="M18.5 5.5L20.5 7.5"/>
</svg>
