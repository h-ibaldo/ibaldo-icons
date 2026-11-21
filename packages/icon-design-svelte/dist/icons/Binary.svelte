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
  <path d="M4 3L7 3L7 10"/>
  <path d="M14 14L17 14L17 21"/>
  <path d="M4 10L10 10"/>
  <path d="M14 21L20 21"/>
  <path d="M15 3L19 3C19.551 3 20 3.449 20 4L20 9C20 9.551 19.551 10 19 10L15 10C14.449 10 14 9.551 14 9L14 4C14 3.449 14.449 3 15 3Z"/>
  <path d="M9 14L5 14C4.449 14 4 14.449 4 15L4 20C4 20.551 4.449 21 5 21L9 21C9.551 21 10 20.551 10 20L10 15C10 14.449 9.551 14 9 14Z"/>
</svg>
