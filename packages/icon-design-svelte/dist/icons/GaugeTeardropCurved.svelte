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
  <path d="M7.758 8.758L10.023 14.422C10.371 15.293 11.156 15.91 12.082 16.043C13.809 16.289 15.289 14.809 15.043 13.082C14.91 12.156 14.293 11.371 13.426 11.023Z"/>
  <path d="M5.996 20.984C7.887 20.355 9.898 20 12 20C14.102 20 16.113 20.355 18.004 20.984C20.426 19.16 22 16.266 22 13C22 7.477 17.523 3 12 3C6.477 3 2 7.477 2 13C2 16.266 3.574 19.16 5.996 20.984Z"/>
</svg>
