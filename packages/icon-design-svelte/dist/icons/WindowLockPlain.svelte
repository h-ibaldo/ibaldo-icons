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
  <path d="M22 22L14 22L14 17L22 17Z"/>
  <path d="M15 17L15 15C15 13.344 16.344 12 18 12C19.656 12 21 13.344 21 15L21 17"/>
  <path d="M10 21.922L5 21.922C3.344 21.922 2 20.582 2 18.922L2 4.922C2 3.266 3.344 1.922 5 1.922L19 1.922C20.656 1.922 22 3.266 22 4.922L22 10"/>
  <path d="M2 7.922L22 7.922"/>
</svg>
