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
  <path d="M21.707 7.879L19.121 5.293C18.731 4.902 18.098 4.902 17.707 5.293L9 14L9 18L13 18L21.707 9.293C22.098 8.902 22.098 8.269 21.707 7.879Z"/>
  <path d="M16 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L16 22C17.105 22 18 21.105 18 20L18 18"/>
  <path d="M15.5 7.5L19.5 11.5"/>
</svg>
