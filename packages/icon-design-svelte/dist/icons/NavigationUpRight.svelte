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
  <path d="M18.68 4.059L3.664 9.313C2.758 9.629 2.785 10.922 3.707 11.199L9.168 12.836C10.125 13.125 10.875 13.875 11.164 14.832L12.801 20.293C13.078 21.215 14.371 21.242 14.688 20.336L19.941 5.32C20.219 4.535 19.465 3.785 18.68 4.059Z"/>
</svg>
