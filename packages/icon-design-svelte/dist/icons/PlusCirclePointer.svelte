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
  <path d="M16 15C16 11.133 12.867 8 9 8C5.133 8 2 11.133 2 15C2 18.867 5.133 22 9 22C12.867 22 16 18.867 16 15Z"/>
  <path d="M21.797 2.809L20.215 9.145C20.121 9.52 19.652 9.652 19.375 9.375L14.625 4.625C14.352 4.348 14.48 3.879 14.855 3.785L21.191 2.203C21.559 2.109 21.891 2.441 21.797 2.809Z"/>
  <path d="M9 18L9 12"/>
  <path d="M6 15L12 15"/>
</svg>
