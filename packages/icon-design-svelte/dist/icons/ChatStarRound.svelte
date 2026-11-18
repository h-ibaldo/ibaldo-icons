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
  <path d="M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"/>
  <path d="M12.426 6.766L13.785 9.52L16.824 9.961C17.215 10.02 17.371 10.496 17.09 10.77L14.891 12.914L15.406 15.945C15.477 16.332 15.066 16.629 14.719 16.445L12 15.016L9.281 16.445C8.934 16.629 8.527 16.332 8.594 15.945L9.113 12.914L6.91 10.77C6.629 10.496 6.785 10.02 7.172 9.961L10.215 9.52L11.574 6.766C11.75 6.41 12.25 6.41 12.426 6.766Z"/>
</svg>
