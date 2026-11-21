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
  <path d="M2 4L4.492 4.832C4.809 4.938 5.055 5.195 5.141 5.516L7.801 15.262C7.918 15.699 8.313 16 8.766 16L18.199 16C18.668 16 19.07 15.676 19.176 15.219L20.73 8.219C20.867 7.594 20.395 7 19.754 7L6 7"/>
  <path d="M10 20C10 20.551 9.551 21 9 21C8.449 21 8 20.551 8 20C8 19.449 8.449 19 9 19C9.551 19 10 19.449 10 20Z"/>
  <path d="M20 20C20 20.551 19.551 21 19 21C18.449 21 18 20.551 18 20C18 19.449 18.449 19 19 19C19.551 19 20 19.449 20 20Z"/>
</svg>
