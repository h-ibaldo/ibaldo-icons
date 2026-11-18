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
  <path d="M6.5 3C4.016 3 2 5.016 2 7.5C2 9.984 4.016 12 6.5 12L10.5 12C12.984 12 15 9.984 15 7.5C15 7.328 14.973 7.164 14.949 7"/>
  <path d="M17.5 12C19.984 12 22 9.984 22 7.5C22 5.016 19.984 3 17.5 3L13.5 3C11.016 3 9 5.016 9 7.5C9 7.672 9.027 7.836 9.051 8"/>
  <path d="M19 16L19 22"/>
  <path d="M22 19L16 19"/>
</svg>
