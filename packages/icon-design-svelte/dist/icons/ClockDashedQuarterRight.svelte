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
  <path d="M19.648 5.563C19.277 5.125 18.875 4.719 18.438 4.352"/>
  <path d="M15.402 2.605C14.871 2.414 14.32 2.262 13.75 2.164"/>
  <path d="M21.836 10.25C21.738 9.68 21.586 9.129 21.395 8.598"/>
  <path d="M10.25 2.164C5.563 2.992 2 7.074 2 12C2 17.523 6.477 22 12 22C16.926 22 21.008 18.438 21.836 13.75"/>
  <path d="M12 7L12 12L17 12"/>
</svg>
