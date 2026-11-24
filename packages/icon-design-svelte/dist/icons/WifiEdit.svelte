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
  <path d="M2.387 7.777C5.195 6 8.387 5.078 11.594 5.004"/>
  <path d="M5.59 11.852C6.656 11.176 7.809 10.688 8.996 10.379"/>
  <path d="M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926"/>
  <path d="M21.414 2.586L21.586 2.758C22.367 3.539 22.367 4.805 21.586 5.586L15 12.172L12 12.172L12 9.172L18.586 2.586C19.367 1.805 20.633 1.805 21.414 2.586Z"/>
  <path d="M17 4.172L20 7.172"/>
  <path d="M12 20L12 20"/>
</svg>
