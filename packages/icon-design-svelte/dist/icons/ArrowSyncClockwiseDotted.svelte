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
  <path d="M12 4L12 4"/>
  <path d="M12 4L12 4"/>
  <path d="M8.492 4.809L8.492 4.809"/>
  <path d="M5.695 7.074L5.695 7.074"/>
  <path d="M15.254 4.691L15.254 4.691"/>
  <path d="M22 11L20 13L18 11"/>
  <path d="M20 12C20 8.742 18.047 5.941 15.25 4.695"/>
  <path d="M12 20L12 20"/>
  <path d="M12 20L12 20"/>
  <path d="M15.508 19.191L15.508 19.191"/>
  <path d="M18.305 16.926L18.305 16.926"/>
  <path d="M8.746 19.309L8.746 19.309"/>
  <path d="M2 13L4 11L6 13"/>
  <path d="M4 12C4 15.258 5.953 18.059 8.75 19.305"/>
</svg>
