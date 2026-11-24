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
  <path d="M16 4.918L16 19.082C16 20.32 14.629 21.063 13.59 20.391L2.707 13.309C1.766 12.691 1.766 11.309 2.707 10.691L13.59 3.609C14.629 2.938 16 3.68 16 4.918Z"/>
  <path d="M22 4L22 20"/>
</svg>
