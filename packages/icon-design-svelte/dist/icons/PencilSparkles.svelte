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
  <path d="M21.5 3.758L20.328 2.586C19.547 1.805 18.281 1.805 17.5 2.586L3 17.086L2 22.086L7 21.086L21.5 6.586C22.281 5.805 22.281 4.539 21.5 3.758Z"/>
  <path d="M15 5.086L19 9.086"/>
  <path d="M4 16.086L8 20.086"/>
  <path d="M5.5 3L5.5 8"/>
  <path d="M8 5.5L3 5.5"/>
  <path d="M20.5 13L20.5 16"/>
  <path d="M22 14.5L19 14.5"/>
  <path d="M16.5 19L16.5 22"/>
  <path d="M18 20.5L15 20.5"/>
</svg>
