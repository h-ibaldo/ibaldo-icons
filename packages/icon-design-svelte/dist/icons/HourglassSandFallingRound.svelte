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
  <path d="M6 2L18 2C18.555 2 19 2.445 19 3L19 3.102C19 4.957 18.262 6.738 16.949 8.051L14.414 10.586C13.633 11.367 13.633 12.633 14.414 13.414L16.949 15.949C18.262 17.262 19 19.043 19 20.898L19 21C19 21.555 18.555 22 18 22L6 22C5.445 22 5 21.555 5 21L5 20.898C5 19.043 5.738 17.262 7.051 15.949L9.586 13.414C10.367 12.633 10.367 11.367 9.586 10.586L7.051 8.051C5.738 6.738 5 4.957 5 3.102L5 3C5 2.445 5.445 2 6 2Z"/>
  <path d="M10 19L14 19"/>
  <path d="M12 8L12 8"/>
</svg>
