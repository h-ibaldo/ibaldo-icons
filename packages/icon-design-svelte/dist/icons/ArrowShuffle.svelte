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
  <path d="M19 3L22 6L19 9"/>
  <path d="M19 15L22 18L19 21"/>
  <path d="M2 18L5.395 18C6.398 18 7.336 17.5 7.891 16.664L14.109 7.336C14.664 6.5 15.602 6 16.605 6L22 6"/>
  <path d="M2 6L5.395 6C6.398 6 7.336 6.5 7.891 7.336L8.832 8.75"/>
  <path d="M11 12L14.109 16.664C14.664 17.5 15.602 18 16.605 18L22 18"/>
</svg>
