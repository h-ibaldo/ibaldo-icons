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
  <path d="M2 22L8 22L10 20L7 17Z"/>
  <path d="M8 22L21 22"/>
  <path d="M22 14L19.414 16.586C18.633 17.367 17.367 17.367 16.586 16.586L10.414 10.414C9.633 9.633 9.633 8.367 10.414 7.586L16 2"/>
  <path d="M17.145 17.145L12 18L10 20L7 17L9 15L9.855 9.855"/>
</svg>
