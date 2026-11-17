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
  <path d="M16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16C22 19.313 19.313 22 16 22Z"/>
  <path d="M16 13.5L16 13.5"/>
  <path d="M16 16.5L16 18.5"/>
  <path d="M5.852 7.5L6.949 8.602L9.148 6.398"/>
  <path d="M12.973 7C12.723 4.195 10.367 2 7.5 2C4.461 2 2 4.461 2 7.5C2 10.367 4.199 12.723 7 12.977"/>
</svg>
