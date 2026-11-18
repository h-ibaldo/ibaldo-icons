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
  <path d="M12.5 19.5L13.5 20.5C15.434 22.434 18.566 22.434 20.5 20.5C22.434 18.566 22.434 15.434 20.5 13.5L16.5 9.5C14.566 7.566 11.434 7.566 9.5 9.5C9.148 9.852 8.887 10.246 8.66 10.66"/>
  <path d="M11.5 4.5L10.5 3.5C8.566 1.566 5.434 1.566 3.5 3.5C1.566 5.434 1.566 8.566 3.5 10.5L7.5 14.5C9.434 16.434 12.566 16.434 14.5 14.5C14.852 14.148 15.113 13.754 15.336 13.336"/>
  <path d="M22.004 4L20.004 2L18.004 4"/>
  <path d="M20.004 7L20.004 2"/>
</svg>
