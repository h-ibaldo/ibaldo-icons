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
  <path d="M21.707 8.912L20.121 7.327C19.728 6.933 19.089 6.937 18.7 7.334L11 15.034L11 18.034L14 18.034L21.715 10.319C22.098 9.927 22.095 9.3 21.707 8.912Z"/>
  <path d="M18 4.034C18 2.929 17.105 2.034 16 2.034L4 2.034C2.895 2.034 2 2.929 2 4.034L2 20.034C2 21.138 2.895 22.034 4 22.034L16 22.034C17.105 22.034 18 21.138 18 20.034L18 19"/>
</svg>
