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
  <path d="M8 4.918L8 19.082C8 20.32 9.371 21.063 10.41 20.391L21.293 13.309C22.234 12.691 22.234 11.309 21.293 10.691L10.41 3.609C9.371 2.938 8 3.68 8 4.918Z"/>
  <path d="M2 4L2 20"/>
</svg>
