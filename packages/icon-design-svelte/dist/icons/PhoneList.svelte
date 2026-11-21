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
  <path d="M7.344 18.785L5.145 16.582C3.855 15.293 2.883 13.723 2.305 11.992C1.754 10.328 1.953 8.508 2.855 7.008L3.477 5.973C3.836 5.367 4.488 5 5.191 5L5.613 5C6.281 5 6.906 5.336 7.277 5.891L8.922 8.363C9.59 9.363 9.23 10.723 8.152 11.262L6.684 11.996L6.941 12.516C7.906 14.449 9.477 16.02 11.414 16.988L11.93 17.246L12.664 15.773C13.203 14.695 14.563 14.336 15.563 15.004L18.035 16.652C18.594 17.023 18.926 17.648 18.926 18.316L18.926 18.738C18.926 19.438 18.559 20.09 17.957 20.453L16.922 21.074C15.418 21.973 13.598 22.176 11.938 21.621C10.207 21.043 8.637 20.074 7.344 18.785Z"/>
  <path d="M13 2L22 2"/>
  <path d="M13 6L14 6"/>
  <path d="M13 10L14 10"/>
  <path d="M17 6L22 6"/>
  <path d="M17 10L22 10"/>
</svg>
