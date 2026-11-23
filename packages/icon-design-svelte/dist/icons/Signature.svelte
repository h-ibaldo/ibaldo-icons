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
  <path d="M4 14C9 11 10 8 10 6C10 2.91 6 0 6 4C6 8 9 10 9 13C9 15 9 18 6 21"/>
  <path d="M12 13C12.699 11.664 13.797 11.043 16 13C18.203 14.957 20.313 13.648 21 11"/>
  <path d="M2 18L22.023 18"/>
</svg>
