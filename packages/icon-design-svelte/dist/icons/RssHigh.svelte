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
  <path d="M2 20C2 18.895 2.895 18 4 18C5.105 18 6 18.895 6 20C6 21.105 5.105 22 4 22C2.895 22 2 21.105 2 20Z"/>
  <path d="M3 12C7.969 12 12 16.031 12 21"/>
  <path d="M3 7C10.73 7 17 13.27 17 21"/>
  <path d="M3 2C13.492 2 22 10.508 22 21"/>
</svg>
