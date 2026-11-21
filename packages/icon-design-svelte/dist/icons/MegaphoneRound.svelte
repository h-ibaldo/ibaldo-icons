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
  <path d="M9.973 15L7 15C5.895 15 5 14.105 5 13L5 9C5 7.895 5.895 7 7 7L9.973 7C11.945 7 13.875 6.414 15.52 5.32L17.445 4.035C18.109 3.594 19 4.07 19 4.867L19 17.133C19 17.93 18.109 18.406 17.445 17.965L15.52 16.68C13.875 15.586 11.945 15 9.973 15Z"/>
  <path d="M5 9L3 9C2.449 9 2 9.449 2 10L2 12C2 12.551 2.449 13 3 13L5 13"/>
  <path d="M19 13L20 13C21.105 13 22 12.105 22 11C22 9.895 21.105 9 20 9L19 9"/>
  <path d="M7 15L8.641 19.922C8.855 20.566 9.457 21 10.137 21C11.113 21 11.855 20.125 11.695 19.164L11 15"/>
</svg>
