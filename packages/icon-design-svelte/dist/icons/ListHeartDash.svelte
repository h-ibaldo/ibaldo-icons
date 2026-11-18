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
  <path d="M8 4L18 4"/>
  <path d="M8 9L18 9"/>
  <path d="M3 4L4 4"/>
  <path d="M3 9L4 9"/>
  <path d="M8 14L11 14"/>
  <path d="M3 14L4 14"/>
  <path d="M17.293 21.414L14.5 18.621C13.672 17.793 13.672 16.449 14.5 15.621C15.328 14.793 16.672 14.793 17.5 15.621L18 16.121L18.5 15.621C19.328 14.793 20.672 14.793 21.5 15.621C22.328 16.449 22.328 17.793 21.5 18.621L18.707 21.414C18.316 21.805 17.684 21.805 17.293 21.414Z"/>
</svg>
