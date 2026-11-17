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
  <path d="M16 8L10.621 13.379C9.793 14.207 9.793 15.551 10.621 16.379C11.449 17.207 12.793 17.207 13.621 16.379L21 9C22.383 7.617 22.383 5.383 21 4C19.617 2.617 17.383 2.617 16 4L6.449 13.551C4.516 15.484 4.516 18.617 6.449 20.551C8.383 22.484 11.516 22.484 13.449 20.551L21 13"/>
  <path d="M2 5L8 5"/>
  <path d="M5 2L5 8"/>
</svg>
