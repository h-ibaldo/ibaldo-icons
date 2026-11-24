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
  <path d="M21.707 12.879L20.121 11.293C19.728 10.899 19.089 10.903 18.7 11.301L11 19L11 22L14 22L21.715 14.285C22.098 13.893 22.095 13.266 21.707 12.879Z"/>
  <path d="M7 18L5 18C3.895 18 3 17.105 3 16L3 4C3 2.895 3.895 2 5 2L17 2C18.105 2 19 2.895 19 4L19 7"/>
  <path d="M9 12L13 8"/>
  <path d="M13 12L9 8"/>
</svg>
