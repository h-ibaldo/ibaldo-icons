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
  <path d="M8 2L8 5"/>
  <path d="M16 2L16 5"/>
  <path d="M10 22L4 22C2.895 22 2 21.105 2 20L2 5C2 3.895 2.895 3 4 3L20 3C21.105 3 22 3.895 22 5L22 20C22 21.105 21.105 22 20 22L14 22"/>
  <path d="M14 22L14 17L10 17L10 22"/>
  <path d="M13.688 13.313L13.684 13.316C12.754 14.246 11.246 14.246 10.316 13.316L10.313 13.313C9.543 12.543 9.395 11.344 9.957 10.406L12 7L14.043 10.406C14.605 11.344 14.457 12.543 13.688 13.313Z"/>
  <path d="M12 15L12 17"/>
</svg>
