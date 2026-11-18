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
  <path d="M2 6.332L2 17.668C2 18.473 2.93 18.918 3.555 18.414L10.641 12.746C11.121 12.363 11.121 11.637 10.641 11.254L3.555 5.586C2.93 5.082 2 5.527 2 6.332Z"/>
  <path d="M11 6.332L11 17.668C11 18.473 11.93 18.918 12.555 18.414L19.641 12.746C20.121 12.363 20.121 11.637 19.641 11.254L12.555 5.586C11.93 5.082 11 5.527 11 6.332Z"/>
  <path d="M22 5L22 19"/>
</svg>
