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
  <path d="M9 15L15 9"/>
  <path d="M9 9.5C9 9.223 9.223 9 9.5 9C9.777 9 10 9.223 10 9.5C10 9.777 9.777 10 9.5 10C9.223 10 9 9.777 9 9.5Z"/>
  <path d="M14 14.5C14 14.223 14.223 14 14.5 14C14.777 14 15 14.223 15 14.5C15 14.777 14.777 15 14.5 15C14.223 15 14 14.777 14 14.5Z"/>
  <path d="M14.121 3.121L20.879 9.879C22.051 11.051 22.051 12.949 20.879 14.121L14.121 20.879C12.949 22.051 11.051 22.051 9.879 20.879L3.121 14.121C1.949 12.949 1.949 11.051 3.121 9.879L9.879 3.121C11.051 1.949 12.949 1.949 14.121 3.121Z"/>
</svg>
