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
  <path d="M15.352 9.219L20.117 11.969C21.789 12.938 22.363 15.074 21.398 16.75C20.43 18.422 18.289 18.996 16.617 18.031L11.852 15.281"/>
  <path d="M11 19L5.5 19C3.566 19 2 17.434 2 15.5C2 13.566 3.566 12 5.5 12L11 12"/>
  <path d="M14 3L12 6"/>
  <path d="M6 5L8 7"/>
</svg>
