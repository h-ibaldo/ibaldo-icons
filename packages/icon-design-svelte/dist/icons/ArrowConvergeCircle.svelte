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
  <path d="M16 10L14 12L16 14"/>
  <path d="M22 12L14 12"/>
  <path d="M8 10L10 12L8 14"/>
  <path d="M2 12L10 12"/>
  <path d="M3.348 17C5.078 19.984 8.301 22 12 22C15.699 22 18.922 19.984 20.652 17"/>
  <path d="M20.652 7C18.922 4.016 15.699 2 12 2C8.301 2 5.078 4.016 3.348 7"/>
</svg>
