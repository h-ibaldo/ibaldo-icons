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
  <path d="M12 7C12 9.762 14.238 12 17 12C19.762 12 22 9.762 22 7C22 4.238 19.762 2 17 2C14.238 2 12 4.238 12 7Z"/>
  <path d="M17 5L17 7L19 7"/>
  <path d="M5.844 11.594L5.875 11.684C6.91 14.652 9.258 16.977 12.234 17.984"/>
  <path d="M12.313 15.59L13.832 14.789L17.828 17.188L17.242 20.113C17.109 20.789 16.668 21.363 16.055 21.668C15.648 21.871 15.191 21.945 14.742 21.883L13.438 21.695C11.082 21.359 8.855 20.398 7 18.91C6.23 18.297 5.531 17.598 4.918 16.828C3.43 14.973 2.469 12.746 2.133 10.391L1.945 9.086C1.883 8.637 1.957 8.18 2.16 7.773C2.465 7.16 3.039 6.719 3.715 6.586L6.641 6L9.039 9.996L8.316 10.793"/>
</svg>
