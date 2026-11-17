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
  <path d="M2 4.355L2 19.586C2 20.477 3.078 20.922 3.707 20.293L8 16L14.023 16C14.926 16 15.367 14.906 14.719 14.281L3.695 3.637C3.059 3.023 2 3.473 2 4.355Z"/>
  <path d="M21 3L16 8"/>
  <path d="M16 3L21 8"/>
</svg>
