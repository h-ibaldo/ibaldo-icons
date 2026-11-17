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
  <path d="M10 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L8 16"/>
  <path d="M22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"/>
  <path d="M14.227 3L10.191 9.996C9.422 11.332 10.383 12.996 11.922 12.996L19.996 12.996C21.535 12.996 22.5 11.332 21.73 9.996L17.691 3C16.922 1.664 14.996 1.664 14.227 3Z"/>
  <path d="M15.961 6.996L15.961 5.996"/>
  <path d="M15.961 9.996L15.961 9.996"/>
</svg>
