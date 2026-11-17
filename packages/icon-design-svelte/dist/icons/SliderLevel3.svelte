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
  <line x1="21.999999977098923" y1="11.999996563434252" x2="13.999999977098923" y2="11.999996563434252"/>
  <line x1="5.999999977098923" y1="11.999996563434252" x2="1.999999977098923" y2="11.999996563434252"/>
  <circle cx="9.999999977098923" cy="11.999996563435161" r="3.999999999999545"/>
</svg>
