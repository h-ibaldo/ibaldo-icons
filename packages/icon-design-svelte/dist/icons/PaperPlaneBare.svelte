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
  <path d="M20.207 11.086L4.617 4.074C3.781 3.699 2.922 4.555 3.297 5.395L6.051 11.594C6.164 11.852 6.164 12.148 6.051 12.406L3.297 18.609C2.922 19.445 3.781 20.305 4.617 19.926L20.207 12.91C20.992 12.559 20.992 11.441 20.207 11.086Z"/>
</svg>
