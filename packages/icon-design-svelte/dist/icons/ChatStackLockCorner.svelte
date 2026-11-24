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
  <path d="M22 12L14 12L14 7L22 7Z"/>
  <path d="M15 7L15 5C15 3.344 16.344 2 18 2C19.656 2 21 3.344 21 5L21 7"/>
  <path d="M8.613 15.445C9.676 17.469 12 18.898 14.73 18.988C16.211 20.141 18.387 21 21 21C20.344 20.34 19.688 19.242 19.316 17.715C20.016 17.246 20.598 16.66 21.047 16"/>
  <path d="M11 3.262C10.363 3.098 9.695 3 9 3C5.133 3 2 5.688 2 9C2 10.914 3.051 12.617 4.684 13.715C4.313 15.242 3.656 16.34 3 17C5.613 17 7.789 16.141 9.27 14.988C10.246 14.957 11.168 14.75 12 14.41"/>
</svg>
