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
  <path d="M10.719 4.094L2.395 17.719C1.785 18.719 2.504 20 3.676 20L20.324 20C21.496 20 22.215 18.719 21.605 17.719L13.281 4.094C12.695 3.137 11.305 3.137 10.719 4.094Z"/>
  <path d="M10.918 13.246C10.918 11.906 11.098 10.051 12.391 8.418C12.391 10.73 15 11.703 15 14C15 15.656 13.656 17 12 17C10.344 17 9 15.656 9 14C9 12.406 10 11 10 11C10 11 10.031 12.363 10.918 13.246Z"/>
</svg>
