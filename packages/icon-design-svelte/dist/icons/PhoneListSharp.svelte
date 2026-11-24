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
  <path d="M6.332 10.297L6.367 10.398C7.535 13.742 10.176 16.359 13.527 17.492"/>
  <path d="M13.613 14.793L15.328 13.895L19.824 16.594L19.164 19.887C19.012 20.648 18.52 21.293 17.828 21.641C17.371 21.867 16.855 21.953 16.348 21.879L14.883 21.668C12.227 21.289 9.727 20.207 7.633 18.535C6.77 17.844 5.98 17.055 5.289 16.191C3.617 14.098 2.531 11.598 2.156 8.941L1.945 7.477C1.871 6.969 1.957 6.453 2.184 5.996C2.531 5.305 3.176 4.813 3.938 4.66L7.23 4L9.93 8.496L9.117 9.398"/>
  <path d="M13 2L22 2"/>
  <path d="M13 6L14 6"/>
  <path d="M13 10L14 10"/>
  <path d="M17 6L22 6"/>
  <path d="M17 10L22 10"/>
</svg>
