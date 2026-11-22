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
  <path d="M2.875 2L8.125 2C8.609 2 9 2.391 9 2.875L9 8.125C9 8.609 8.609 9 8.125 9L2.875 9C2.391 9 2 8.609 2 8.125L2 2.875C2 2.391 2.391 2 2.875 2Z"/>
  <path d="M15.875 5L21.125 5C21.609 5 22 5.391 22 5.875L22 11.125C22 11.609 21.609 12 21.125 12L15.875 12C15.391 12 15 11.609 15 11.125L15 5.875C15 5.391 15.391 5 15.875 5Z"/>
  <path d="M5.875 15L11.125 15C11.609 15 12 15.391 12 15.875L12 21.125C12 21.609 11.609 22 11.125 22L5.875 22C5.391 22 5 21.609 5 21.125L5 15.875C5 15.391 5.391 15 5.875 15Z"/>
</svg>
