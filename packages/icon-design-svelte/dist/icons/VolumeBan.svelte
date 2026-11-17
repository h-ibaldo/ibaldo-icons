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
  <path d="M22 12C22 9.516 19.984 7.5 17.5 7.5C15.016 7.5 13 9.516 13 12C13 14.484 15.016 16.5 17.5 16.5C19.984 16.5 22 14.484 22 12Z"/>
  <path d="M14.316 15.18L20.684 8.82"/>
  <path d="M16 7.777L16 3.867C16 3.07 15.109 2.594 14.445 3.035L7 8L3 8C2.449 8 2 8.449 2 9L2 15C2 15.551 2.449 16 3 16L7 16L14.445 20.965C15.109 21.406 16 20.93 16 20.133L16 16.223"/>
</svg>
