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
  <path d="M21.242 13.586C20.461 12.805 19.195 12.805 18.414 13.586L13 19L13 22L16 22L21.414 16.586C22.195 15.805 22.195 14.539 21.414 13.758Z"/>
  <path d="M17 15L20 18"/>
  <path d="M9.051 12C10.418 13.367 12.633 13.367 14 12L17.973 8.023C19.344 6.656 19.344 4.441 17.973 3.074L17.926 3.023C16.559 1.656 14.344 1.656 12.973 3.023L11 5"/>
  <path d="M11.949 9C10.582 7.633 8.367 7.633 7 9L3.027 12.977C1.656 14.344 1.656 16.559 3.027 17.926L3.074 17.977C4.441 19.344 6.656 19.344 8.027 17.977L10 16"/>
</svg>
