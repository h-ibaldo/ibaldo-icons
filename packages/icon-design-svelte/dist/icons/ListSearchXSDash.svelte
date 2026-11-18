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
  <path d="M20.5 17C20.5 15.066 18.934 13.5 17 13.5C15.066 13.5 13.5 15.066 13.5 17C13.5 18.934 15.066 20.5 17 20.5C18.934 20.5 20.5 18.934 20.5 17Z"/>
  <path d="M19.477 19.477L22 22"/>
  <path d="M8 4L15.5 4"/>
  <path d="M8 9L15.5 9"/>
  <path d="M3 4L4 4"/>
  <path d="M3 9L4 9"/>
  <path d="M8 14L10 14"/>
  <path d="M3 14L4 14"/>
</svg>
