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
  <path d="M12 22L11.574 20.934C10.531 18.324 9.125 15.875 7.398 13.656L6.695 12.754C4.617 10.078 4.969 6.25 7.5 4C10.066 1.719 13.934 1.719 16.5 4C19.031 6.25 19.383 10.078 17.305 12.754L16.602 13.656C14.875 15.875 13.469 18.324 12.426 20.934Z"/>
  <path d="M10 9C10 7.895 10.895 7 12 7C13.105 7 14 7.895 14 9C14 10.105 13.105 11 12 11C10.895 11 10 10.105 10 9Z"/>
</svg>
