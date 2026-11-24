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
  <path d="M13.648 11L20.352 11C21.516 11 22.238 9.73 21.637 8.73L18.285 3.145C17.703 2.172 16.297 2.172 15.715 3.145L12.363 8.73C11.762 9.73 12.484 11 13.648 11Z"/>
  <path d="M8.613 15.445C9.672 17.469 12 18.898 14.73 18.988C16.211 20.141 18.383 21 21 21C20.34 20.34 19.691 19.242 19.316 17.715C20.656 16.813 21.594 15.5 21.891 14"/>
  <path d="M11 3.262C10.367 3.098 9.699 3 9 3C5.133 3 2 5.688 2 9C2 10.914 3.051 12.617 4.684 13.715C4.309 15.242 3.656 16.34 3 17C5.617 17 7.789 16.141 9.27 14.988C10.246 14.957 11.168 14.75 12 14.41"/>
</svg>
