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
  <path d="M11 2L11 4"/>
  <path d="M2 11L4 11"/>
  <path d="M4.637 4.637L6.051 6.051"/>
  <path d="M4.637 17.363L6.051 15.949"/>
  <path d="M15.949 6.051L17.363 4.637"/>
  <path d="M10.316 10.949L13.863 21.582C14.004 22.004 14.582 22.047 14.781 21.648L17.07 17.07L21.648 14.781C22.047 14.582 22.004 14.004 21.582 13.859L10.949 10.316C10.559 10.184 10.184 10.559 10.316 10.949Z"/>
</svg>
