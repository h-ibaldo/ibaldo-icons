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
  <path d="M4 22.034L20 22.034"/>
  <path d="M12 18.034L12 22.034"/>
  <path d="M7 18.034L17 18.034C18.105 18.034 19 17.138 19 16.034L19 4.034C19 2.929 18.105 2.034 17 2.034L7 2.034C5.895 2.034 5 2.929 5 4.034L5 16.034C5 17.138 5.895 18.034 7 18.034Z"/>
</svg>
