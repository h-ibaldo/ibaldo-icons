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
  <path d="M21 22L11 22C10.448 22 10 21.552 10 21L10 14.302C10 13.749 10.448 13.302 11 13.302L21 13.302C21.552 13.302 22 13.749 22 14.302L22 21C22 21.552 21.552 22 21 22Z"/>
  <path d="M10.325 13.573L15.309 18.339C15.695 18.709 16.305 18.709 16.691 18.339L21.675 13.573"/>
  <path d="M18 10L18 7.984C18 7.354 17.75 6.75 17.304 6.304L13.696 2.696C13.25 2.25 12.646 2 12.016 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L7 22"/>
  <path d="M12 2L12 7C12 7.552 12.448 8 13 8L18 8"/>
</svg>
