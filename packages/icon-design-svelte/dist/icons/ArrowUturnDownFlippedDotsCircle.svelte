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
  <path d="M2 12L5 15L8 12"/>
  <path d="M22 16.5C22 19.539 19.539 22 16.5 22C13.461 22 11 19.539 11 16.5C11 13.461 13.461 11 16.5 11C19.539 11 22 13.461 22 16.5Z"/>
  <path d="M14.75 16.5L14.75 16.5"/>
  <path d="M18.25 16.5L18.25 16.5"/>
  <path d="M16.91 7C16.434 4.164 13.973 2 11 2C7.688 2 5 4.688 5 8L5 15"/>
</svg>
