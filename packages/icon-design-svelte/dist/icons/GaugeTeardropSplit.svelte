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
  <path d="M19 12L22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12L5 12"/>
  <path d="M15.926 8.004L14.141 14.113C13.859 15.066 13.066 15.781 12.09 15.957C10.664 16.215 9.301 15.27 9.043 13.844C8.863 12.867 9.254 11.875 10.051 11.277L15.145 7.461C15.531 7.176 16.063 7.539 15.926 8.004Z"/>
  <path d="M2.84 16C4.383 19.531 7.898 22 12 22C16.102 22 19.617 19.531 21.16 16"/>
</svg>
