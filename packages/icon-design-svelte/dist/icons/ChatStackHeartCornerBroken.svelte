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
  <path d="M8 2L5 2C3.344 2 2 3.344 2 5L2 13"/>
  <path d="M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 11"/>
  <path d="M16.297 9.574L12.68 5.953C11.773 5.047 11.773 3.582 12.68 2.68L12.68 2.676C13.461 1.898 14.68 1.777 15.598 2.387L17 3.324L18.402 2.387C19.32 1.777 20.539 1.898 21.32 2.676L21.32 2.68C22.227 3.582 22.227 5.047 21.32 5.953L17.703 9.574C17.316 9.961 16.688 9.961 16.297 9.574Z"/>
  <path d="M8 6.184C6.836 6.598 6 7.695 6 9L6 15C6 16.656 7.344 18 9 18L11 18"/>
</svg>
