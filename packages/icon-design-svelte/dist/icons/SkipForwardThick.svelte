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
  <path d="M2 3.75L2 20.25C2 21.141 3.039 21.625 3.723 21.059L13.621 12.805C14.125 12.387 14.125 11.613 13.621 11.195L3.723 2.941C3.039 2.375 2 2.859 2 3.75Z"/>
  <path d="M19 21L21 21C21.551 21 22 20.551 22 20L22 4C22 3.449 21.551 3 21 3L19 3C18.449 3 18 3.449 18 4L18 20C18 20.551 18.449 21 19 21Z"/>
</svg>
