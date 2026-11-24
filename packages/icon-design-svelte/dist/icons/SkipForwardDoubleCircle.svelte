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
  <path d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"/>
  <path d="M7 8.414L7 15.586C7 15.75 7.195 15.844 7.324 15.738L12 12L7.324 8.262C7.195 8.156 7 8.25 7 8.414Z"/>
  <path d="M12 8.414L12 15.586C12 15.75 12.195 15.844 12.324 15.738L17 12L12.324 8.262C12.195 8.156 12 8.25 12 8.414Z"/>
  <path d="M17 8L17 16"/>
</svg>
