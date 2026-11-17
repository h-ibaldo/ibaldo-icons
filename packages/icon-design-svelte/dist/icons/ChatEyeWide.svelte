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
  <path d="M15.531 7.5C14.98 7.5 14.531 7.055 14.531 6.5C14.531 5.945 14.98 5.5 15.531 5.5C16.086 5.5 16.531 5.945 16.531 6.5C16.531 7.055 16.086 7.5 15.531 7.5Z"/>
  <path d="M15.531 2C12.547 2 10.008 3.871 9 6.5C10.008 9.129 12.547 11 15.531 11C18.516 11 21.059 9.129 22.063 6.5C21.059 3.871 18.516 2 15.531 2Z"/>
  <path d="M7 3.293C4.109 4.152 2 6.828 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.172 17 20.844 14.891 21.707 12"/>
</svg>
