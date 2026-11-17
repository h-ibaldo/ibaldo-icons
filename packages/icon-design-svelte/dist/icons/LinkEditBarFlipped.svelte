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
  <path d="M2.586 2.758C1.805 3.539 1.805 4.805 2.586 5.586L8 11L11 11L11 8L5.586 2.586C4.805 1.805 3.539 1.805 2.758 2.586Z"/>
  <path d="M7 4L4 7"/>
  <path d="M10.172 15.828L8.828 17.172C7.723 18.277 7.723 20.066 8.828 21.172C9.934 22.277 11.723 22.277 12.828 21.172L14.172 19.828C15.277 18.723 15.277 16.934 14.172 15.828C13.066 14.723 11.277 14.723 10.172 15.828Z"/>
  <path d="M17.172 8.828L15.828 10.172C14.723 11.277 14.723 13.066 15.828 14.172C16.934 15.277 18.723 15.277 19.828 14.172L21.172 12.828C22.277 11.723 22.277 9.934 21.172 8.828C20.066 7.723 18.277 7.723 17.172 8.828Z"/>
  <path d="M18 12L12 18"/>
</svg>
