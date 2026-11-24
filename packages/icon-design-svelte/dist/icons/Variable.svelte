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
  <path d="M6 21.168C3.645 19.625 2 16.102 2 12C2 7.898 3.645 4.375 6 2.832"/>
  <path d="M18 21.168C20.355 19.625 22 16.102 22 12C22 7.898 20.355 4.375 18 2.832"/>
  <path d="M7 17L7.867 17C8.57 17 9.223 16.633 9.582 16.027L14.418 7.973C14.777 7.367 15.43 7 16.133 7L17 7"/>
  <path d="M16 17L14 17L10 7L8 7"/>
</svg>
