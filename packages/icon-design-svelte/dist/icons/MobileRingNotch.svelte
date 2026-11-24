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
  <path d="M14 17.043L14 20C14 21.105 13.105 22 12 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L12 2C13.105 2 14 2.895 14 4L14 7.043"/>
  <path d="M9 5L8 5"/>
  <path d="M15 10.793C15.781 11.574 15.781 12.84 15 13.621"/>
  <path d="M17 9C18.77 10.77 18.77 13.645 17 15.414"/>
  <path d="M19 7.105C21.82 9.922 21.82 14.492 19 17.313"/>
</svg>
