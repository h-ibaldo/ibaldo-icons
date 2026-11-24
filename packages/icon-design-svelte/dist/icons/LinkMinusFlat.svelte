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
  <path d="M6.5 5C4.016 5 2 7.016 2 9.5C2 11.984 4.016 14 6.5 14L10.5 14C12.984 14 15 11.984 15 9.5C15 9.328 14.973 9.164 14.949 9"/>
  <path d="M17.5 14C19.984 14 22 11.984 22 9.5C22 7.016 19.984 5 17.5 5L13.5 5C11.016 5 9 7.016 9 9.5C9 9.672 9.027 9.836 9.051 10"/>
  <path d="M22 19L16 19"/>
</svg>
