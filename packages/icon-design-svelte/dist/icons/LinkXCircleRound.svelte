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
  <path d="M22 16.5C22 19.535 19.539 22 16.5 22C13.461 22 11 19.535 11 16.5C11 13.465 13.461 11 16.5 11C19.539 11 22 13.465 22 16.5Z"/>
  <path d="M18 15L15 18"/>
  <path d="M15 15L18 18"/>
  <path d="M11 10.238C9.793 9.434 9 8.059 9 6.5C9 4.016 11.016 2 13.5 2L17.5 2C19.984 2 22 4.016 22 6.5C22 8.813 20.246 10.699 18 10.949"/>
  <path d="M6 5.051C3.754 5.301 2 7.188 2 9.5C2 11.984 4.016 14 6.5 14L10.5 14C10.918 14 11.316 13.922 11.699 13.816"/>
  <path d="M14.594 11.344C14.852 10.781 15 10.16 15 9.5C15 7.941 14.207 6.566 13 5.758"/>
</svg>
