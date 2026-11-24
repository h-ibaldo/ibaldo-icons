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
  <path d="M5.496 18.504L2.496 21.504"/>
  <path d="M8 13L10 11"/>
  <path d="M11 16L13 14"/>
  <path d="M4.121 12.879L5.293 11.707C5.684 11.316 6.316 11.316 6.707 11.707L12.293 17.293C12.684 17.684 12.684 18.316 12.293 18.707L11.121 19.879C9.949 21.051 8.051 21.051 6.879 19.879L4.121 17.121C2.949 15.949 2.949 14.051 4.121 12.879Z"/>
  <path d="M19 3L15 7L21 7L17 12"/>
</svg>
