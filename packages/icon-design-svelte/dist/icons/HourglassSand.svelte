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
  <path d="M16.922 7.898L12 12L7.078 7.898C6.395 7.328 6 6.484 6 5.594L6 2L18 2L18 5.594C18 6.484 17.605 7.328 16.922 7.898Z"/>
  <path d="M7.078 16.102L12 12L16.922 16.102C17.605 16.672 18 17.516 18 18.406L18 22L6 22L6 18.406C6 17.516 6.395 16.672 7.078 16.102Z"/>
  <path d="M10 19L14 19"/>
</svg>
