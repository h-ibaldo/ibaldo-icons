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
  <path d="M15.922 8C15.434 4.609 12.527 2 9 2C5.133 2 2 5.133 2 9C2 12.867 5.133 16 9 16C11.793 16 14.195 14.363 15.32 12"/>
  <path d="M8.078 16C8.566 19.391 11.473 22 15 22C18.867 22 22 18.867 22 15C22 11.133 18.867 8 15 8C12.207 8 9.805 9.637 8.68 12"/>
</svg>
