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
  <path d="M19.88 14.464A9 9 0 1 1 9.536 4.12"/>
  <path d="M19.88 14.464A8 8 0 0 1 9.536 4.12"/>
  <path d="M17.5 2.8L18.558 5.344L21.304 5.564L19.212 7.356L19.851 10.036L17.5 8.6L15.149 10.036L15.788 7.356L13.696 5.564L16.442 5.344Z"/>
</svg>
