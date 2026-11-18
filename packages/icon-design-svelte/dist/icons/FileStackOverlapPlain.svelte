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
  <path d="M18 17.034L20 17.034C21.105 17.034 22 16.138 22 15.034L22 4.034C22 2.929 21.105 2.034 20 2.034L11 2.034C9.895 2.034 9 2.929 9 4.034"/>
  <path d="M4 22.034L13 22.034C14.105 22.034 15 21.138 15 20.034L15 9.034C15 7.929 14.105 7.034 13 7.034L4 7.034C2.895 7.034 2 7.929 2 9.034L2 20.034C2 21.138 2.895 22.034 4 22.034Z"/>
</svg>
