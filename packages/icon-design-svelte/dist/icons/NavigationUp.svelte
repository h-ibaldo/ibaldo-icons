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
  <path d="M12.996 3.633L20.477 19.418C20.934 20.387 19.883 21.375 18.941 20.859L13.602 17.906C12.605 17.359 11.395 17.359 10.398 17.906L5.059 20.859C4.117 21.375 3.066 20.387 3.523 19.418L11.004 3.633C11.398 2.789 12.602 2.789 12.996 3.633Z"/>
</svg>
