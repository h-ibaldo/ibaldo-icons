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
  <path d="M4 20L20 4"/>
  <path d="M4 6.5C4 5.121 5.121 4 6.5 4C7.879 4 9 5.121 9 6.5C9 7.879 7.879 9 6.5 9C5.121 9 4 7.879 4 6.5Z"/>
  <path d="M15 17.5C15 16.121 16.121 15 17.5 15C18.879 15 20 16.121 20 17.5C20 18.879 18.879 20 17.5 20C16.121 20 15 18.879 15 17.5Z"/>
</svg>
