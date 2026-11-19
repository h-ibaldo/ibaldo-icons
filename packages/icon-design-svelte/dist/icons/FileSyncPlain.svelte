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
  <path d="M11 12.034L11 15.034L14 15.034"/>
  <path d="M21 22.034L21 19.034L18 19.034"/>
  <path d="M11.422 19.034C12.194 20.798 13.951 22.034 16 22.034C18.049 22.034 19.806 20.798 20.578 19.034"/>
  <path d="M20.569 15.034C19.796 13.271 18.048 12.034 16 12.034C13.951 12.034 12.194 13.269 11.422 15.034"/>
  <path d="M20 9.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L9 22.034"/>
</svg>
