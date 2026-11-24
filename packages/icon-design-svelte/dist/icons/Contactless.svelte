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
  <path d="M5 10.023C6.148 11.172 6.148 13.035 5 14.184"/>
  <path d="M7.945 7.383C10.551 9.988 10.551 14.219 7.945 16.824"/>
  <path d="M10.887 4.59C15.035 8.738 15.035 15.469 10.887 19.617"/>
  <path d="M15 2.848C20.113 7.961 20.113 16.246 15 21.359"/>
</svg>
