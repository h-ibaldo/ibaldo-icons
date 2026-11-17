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
  <path d="M11 10L10.586 10.414C9.023 11.977 9.023 14.508 10.586 16.07L10.93 16.414C12.492 17.977 15.023 17.977 16.586 16.414L20.93 12.07C22.492 10.508 22.492 7.977 20.93 6.414L20.586 6.07C19.219 4.703 17.109 4.535 15.559 5.559"/>
  <path d="M13 14L13.414 13.586C14.977 12.023 14.977 9.492 13.414 7.93L13.07 7.586C11.508 6.023 8.977 6.023 7.414 7.586L3.07 11.93C1.508 13.492 1.508 16.023 3.07 17.586L3.414 17.93C4.781 19.297 6.891 19.465 8.441 18.441"/>
</svg>
