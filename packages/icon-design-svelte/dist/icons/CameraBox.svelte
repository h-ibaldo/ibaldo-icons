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
  <path d="M20 4C21.105 4 22 4.957 22 6.133L22 17.867C22 19.043 21.105 20 20 20L4 20C2.895 20 2 19.043 2 17.867L2 6.133C2 4.957 2.895 4 4 4Z"/>
  <path d="M9.5 11.5C9.5 9.016 11.516 7 14 7C16.484 7 18.5 9.016 18.5 11.5C18.5 13.984 16.484 16 14 16C11.516 16 9.5 13.984 9.5 11.5Z"/>
  <path d="M5 8L5 7L7 7L7 8Z"/>
</svg>
