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
  <path d="M8 4L14 4"/>
  <path d="M8 9L14 9"/>
  <path d="M3 4L4 4"/>
  <path d="M3 9L4 9"/>
  <path d="M8 14L14 14"/>
  <path d="M3 14L4 14"/>
  <path d="M21.621 10C20.793 9.172 19.449 9.172 18.621 10C17.793 10.828 17.793 12.172 18.621 13L21.121 15.5C21.949 16.328 21.949 17.672 21.121 18.5C20.293 19.328 18.949 19.328 18.121 18.5"/>
  <path d="M20 8L20 9.379"/>
  <path d="M20 19.121L20 21"/>
</svg>
