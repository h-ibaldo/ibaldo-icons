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
  <path d="M7 14.5C7 10.359 10.355 7 14.5 7C18.645 7 22 10.359 22 14.5C22 18.641 18.645 22 14.5 22C10.355 22 7 18.641 7 14.5Z"/>
  <path d="M3.512 14C2.566 12.746 2 11.191 2 9.5C2 5.359 5.359 2 9.5 2C11.191 2 12.746 2.566 14 3.512"/>
  <path d="M14.5 11.5L14.5 17.5"/>
  <path d="M17.5 14.5L11.5 14.5"/>
</svg>
