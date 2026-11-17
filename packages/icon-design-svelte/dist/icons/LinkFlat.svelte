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
  <path d="M6.5 8C4.016 8 2 10.016 2 12.5C2 14.984 4.016 17 6.5 17L10.5 17C12.984 17 15 14.984 15 12.5C15 12.328 14.973 12.164 14.949 12"/>
  <path d="M17.5 17C19.984 17 22 14.984 22 12.5C22 10.016 19.984 8 17.5 8L13.5 8C11.016 8 9 10.016 9 12.5C9 12.672 9.027 12.836 9.051 13"/>
</svg>
