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
  <path d="M9 16L12 19L9 21.5"/>
  <path d="M12 3L12 3"/>
  <path d="M12 7L12 7"/>
  <path d="M12 11L12 11"/>
  <path d="M17 18.191C19.984 17.152 22 15.219 22 13C22 10.539 19.531 8.43 16 7.504"/>
  <path d="M8 7.504C4.469 8.43 2 10.539 2 13C2 16.313 6.477 19 12 19"/>
</svg>
