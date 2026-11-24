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
  <path d="M7.207 20.777C8.633 21.555 10.266 22 12 22C13.945 22 15.758 21.434 17.293 20.473"/>
  <path d="M2.031 12.621C2.148 14.535 2.801 16.305 3.852 17.781"/>
  <path d="M20.473 17.293C21.438 15.758 22 13.945 22 12C22 7.254 18.688 3.285 14.25 2.266"/>
  <path d="M9.75 2.266C9.176 2.395 8.617 2.57 8.086 2.797"/>
  <path d="M4.457 5.449C3.754 6.258 3.176 7.176 2.762 8.18"/>
  <path d="M12 7L12 12L17 14"/>
</svg>
