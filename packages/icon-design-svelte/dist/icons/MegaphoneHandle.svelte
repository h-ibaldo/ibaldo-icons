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
  <path d="M11.113 16.176L7 15L7 9L12.211 6.77C13.398 6.258 14.523 5.609 15.559 4.832L16.398 4.203C17.059 3.707 18 4.176 18 5L18 18C18 18.824 17.059 19.297 16.398 18.801C14.813 17.613 13.023 16.723 11.113 16.176Z"/>
  <path d="M7 15L4 15C2.895 15 2 14.105 2 13L2 11C2 9.898 2.895 9 4 9L7 9"/>
  <path d="M7 15L8 21"/>
  <path d="M18 9L19.5 9C20.883 9 22 10.121 22 11.5C22 12.883 20.883 14 19.5 14L18 14"/>
</svg>
