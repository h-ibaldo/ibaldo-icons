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
  <path d="M20.5 13.5C20.5 8.805 16.695 5 12 5C7.305 5 3.5 8.805 3.5 13.5C3.5 18.195 7.305 22 12 22C16.695 22 20.5 18.195 20.5 13.5Z"/>
  <path d="M9 2L15 2"/>
  <path d="M12 9L12 9"/>
  <path d="M12 18L12 18"/>
  <path d="M16.5 13.5L16.5 13.5"/>
  <path d="M7.5 13.5L7.5 13.5"/>
  <path d="M15.184 10.32L15.184 10.32"/>
  <path d="M8.816 16.68L8.816 16.68"/>
  <path d="M15.184 16.68L15.184 16.68"/>
  <path d="M8.816 10.32L8.816 10.32"/>
</svg>
