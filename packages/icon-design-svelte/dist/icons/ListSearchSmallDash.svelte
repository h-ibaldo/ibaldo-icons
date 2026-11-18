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
  <path d="M14 16.922C14 14.715 15.789 12.922 18 12.922C20.211 12.922 22 14.715 22 16.922C22 19.133 20.211 20.922 18 20.922C15.789 20.922 14 19.133 14 16.922Z"/>
  <path d="M13 22L15.215 19.785"/>
  <path d="M8 4L14.5 4"/>
  <path d="M8 9L14.5 9"/>
  <path d="M3 4L4 4"/>
  <path d="M3 9L4 9"/>
  <path d="M8 14L10 14"/>
  <path d="M3 14L4 14"/>
</svg>
