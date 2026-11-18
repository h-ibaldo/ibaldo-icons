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
  <path d="M18 4L18 3.156C18 2.516 17.484 2 16.848 2L11.152 2C10.516 2 10 2.516 10 3.156L10 8.844C10 9.484 10.516 10 11.152 10L16.848 10C17.484 10 18 9.484 18 8.844L18 8L21.277 9.637C21.609 9.805 22 9.563 22 9.191L22 2.809C22 2.438 21.609 2.195 21.277 2.363Z"/>
  <path d="M6 4.016C3.574 5.84 2 8.73 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C16.84 22 20.871 18.566 21.801 14"/>
</svg>
