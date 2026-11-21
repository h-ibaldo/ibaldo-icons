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
  <path d="M12 20C12 21.656 10.656 22 9 22C7.344 22 6 20.656 6 19C6 18.645 6.063 18.305 6.176 17.988C3.84 17.82 2 15.875 2 13.5C2 11.617 3.156 10.004 4.801 9.332C4.309 8.875 4 8.223 4 7.5C4 6.121 5.121 5 6.5 5C6.695 5 6.883 5.023 7.063 5.063C7.023 4.883 7 4.695 7 4.5C7 3.121 8.121 2 9.5 2C10.879 2 12 2.121 12 3.5"/>
  <path d="M12 20C12 21.656 13.344 22 15 22C16.656 22 18 20.656 18 19C18 18.645 17.938 18.305 17.824 17.988C20.16 17.82 22 15.875 22 13.5C22 11.617 20.844 10.004 19.199 9.332C19.691 8.875 20 8.223 20 7.5C20 6.121 18.879 5 17.5 5C17.305 5 17.117 5.023 16.938 5.063C16.977 4.883 17 4.695 17 4.5C17 3.121 15.879 2 14.5 2C13.121 2 12 2.121 12 3.5"/>
  <path d="M9 17.242C8.285 17.723 7.426 18 6.5 18C6.332 18 6.164 17.992 6 17.973"/>
  <path d="M15 17.242C15.715 17.723 16.574 18 17.5 18C17.668 18 17.836 17.992 18 17.973"/>
  <path d="M12 9.5C12 11.156 10.656 12.5 9 12.5"/>
  <path d="M12 9.5C12 11.156 13.344 12.5 15 12.5"/>
  <path d="M12 3L12 20"/>
  <path d="M8 6L7 5"/>
  <path d="M17 5L16 6"/>
</svg>
