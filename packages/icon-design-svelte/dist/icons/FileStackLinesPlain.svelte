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
  <path d="M11 14.034L17 14.034"/>
  <path d="M11 10.034L17 10.034"/>
  <path d="M11 6.034L17 6.034"/>
  <path d="M3 7.034L3 20.034C3 21.138 3.895 22.034 5 22.034L16 22.034"/>
  <path d="M9 18.034L19 18.034C20.105 18.034 21 17.138 21 16.034L21 4.034C21 2.929 20.105 2.034 19 2.034L9 2.034C7.895 2.034 7 2.929 7 4.034L7 16.034C7 17.138 7.895 18.034 9 18.034Z"/>
</svg>
