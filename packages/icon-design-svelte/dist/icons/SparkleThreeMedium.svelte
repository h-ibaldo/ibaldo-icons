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
  <path d="M2 7C4.762 7 7 9.238 7 12"/>
  <path d="M12 7C9.238 7 7 9.238 7 12"/>
  <path d="M12 7C9.238 7 7 4.762 7 2"/>
  <path d="M2 7C4.762 7 7 4.762 7 2"/>
  <path d="M15 10.5C16.934 10.5 18.5 12.066 18.5 14"/>
  <path d="M22 10.5C20.066 10.5 18.5 12.066 18.5 14"/>
  <path d="M22 10.5C20.066 10.5 18.5 8.934 18.5 7"/>
  <path d="M15 10.5C16.934 10.5 18.5 8.934 18.5 7"/>
  <path d="M6 18C8.211 18 10 19.789 10 22"/>
  <path d="M14 18C11.789 18 10 19.789 10 22"/>
  <path d="M14 18C11.789 18 10 16.211 10 14"/>
  <path d="M6 18C8.211 18 10 16.211 10 14"/>
</svg>
