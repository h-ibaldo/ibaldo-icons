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
  <path d="M17 14.5C17 10.359 13.645 7 9.5 7C5.355 7 2 10.359 2 14.5C2 18.641 5.355 22 9.5 22C13.645 22 17 18.641 17 14.5Z"/>
  <path d="M20.484 14C21.434 12.746 22 11.191 22 9.5C22 5.359 18.641 2 14.5 2C12.809 2 11.254 2.566 10 3.512"/>
  <path d="M7 17L12 12"/>
  <path d="M12 17L7 12"/>
</svg>
