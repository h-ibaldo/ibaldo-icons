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
  <path d="M20.5 12C15.805 12 12 8.195 12 3.5C12 2.988 12.055 2.492 12.141 2.008C12.094 2.008 12.047 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11.953 21.992 11.906 21.992 11.859C21.508 11.945 21.012 12 20.5 12Z"/>
  <path d="M9 8C9 8.551 8.555 9 8 9C7.445 9 7 8.551 7 8C7 7.449 7.445 7 8 7C8.555 7 9 7.449 9 8Z"/>
  <path d="M16 16C16 16.551 15.555 17 15 17C14.445 17 14 16.551 14 16C14 15.449 14.445 15 15 15C15.555 15 16 15.449 16 16Z"/>
  <path d="M9 15C9 15.551 8.555 16 8 16C7.445 16 7 15.551 7 15C7 14.449 7.445 14 8 14C8.555 14 9 14.449 9 15Z"/>
  <path d="M11 12L11 12"/>
  <path d="M11 18L11 18"/>
</svg>
