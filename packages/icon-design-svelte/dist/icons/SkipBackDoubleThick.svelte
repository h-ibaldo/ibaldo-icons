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
  <path d="M3 5L5 5C5.551 5 6 5.449 6 6L6 18C6 18.551 5.551 19 5 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5Z"/>
  <path d="M22 17.586L22 6.414C22 5.523 20.922 5.078 20.293 5.707L14 12L20.293 18.293C20.922 18.922 22 18.477 22 17.586Z"/>
  <path d="M14 17.586L14 6.414C14 5.523 12.922 5.078 12.293 5.707L6 12L12.293 18.293C12.922 18.922 14 18.477 14 17.586Z"/>
</svg>
