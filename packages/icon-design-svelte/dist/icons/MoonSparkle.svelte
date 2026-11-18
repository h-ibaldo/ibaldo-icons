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
  <path d="M16.5 5Q17.04 7.46 19.5 8Q17.04 8.54 16.5 11Q15.96 8.54 13.5 8Q15.96 7.46 16.5 5Z"/>
  <path d="M20.5 2Q20.77 3.23 22 3.5Q20.77 3.77 20.5 5Q20.23 3.77 19 3.5Q20.23 3.23 20.5 2Z"/>
</svg>
