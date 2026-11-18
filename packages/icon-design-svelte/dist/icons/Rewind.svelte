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
  <path d="M22 4.641L22 19.363C22 20.188 21.02 20.621 20.41 20.066L12.313 12.703C11.895 12.328 11.895 11.672 12.313 11.297L20.41 3.934C21.02 3.379 22 3.813 22 4.641Z"/>
  <path d="M12 4.641L12 19.363C12 20.188 11.02 20.621 10.41 20.066L2.313 12.703C1.895 12.328 1.895 11.672 2.313 11.297L10.41 3.934C11.02 3.379 12 3.813 12 4.641Z"/>
</svg>
