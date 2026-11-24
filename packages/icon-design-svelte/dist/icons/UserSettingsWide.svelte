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
  <path d="M4.5 6.5C4.5 4.016 6.516 2 9 2C11.484 2 13.5 4.016 13.5 6.5C13.5 8.984 11.484 11 9 11C6.516 11 4.5 8.984 4.5 6.5Z"/>
  <path d="M20.5 17C20.5 18.934 18.934 20.5 17 20.5C15.066 20.5 13.5 18.934 13.5 17C13.5 15.066 15.066 13.5 17 13.5C18.934 13.5 20.5 15.066 20.5 17Z"/>
  <path d="M17 17.012L17 17"/>
  <path d="M17 12L17 13.5"/>
  <path d="M17 20.5L17 22"/>
  <path d="M22 17L20.5 17"/>
  <path d="M13.5 17L12 17"/>
  <path d="M20.535 20.535L19.477 19.477"/>
  <path d="M14.523 14.523L13.465 13.465"/>
  <path d="M13.465 20.535L14.523 19.477"/>
  <path d="M19.477 14.523L20.535 13.465"/>
  <path d="M2 22L2 18C2 14.133 5.133 11 9 11C9.914 11 10.785 11.176 11.586 11.492"/>
</svg>
