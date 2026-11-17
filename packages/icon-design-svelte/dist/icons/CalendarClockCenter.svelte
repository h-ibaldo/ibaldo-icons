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
  <path d="M8 2L8 6"/>
  <path d="M16 2L16 6"/>
  <path d="M12 14L12 16L14 16"/>
  <path d="M18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16C6 12.688 8.688 10 12 10C15.313 10 18 12.688 18 16Z"/>
  <path d="M16.465 20L20.113 20C21.156 20 22 19.156 22 18.113L22 5.887C22 4.844 21.156 4 20.113 4L3.887 4C2.844 4 2 4.844 2 5.887L2 18.113C2 19.156 2.844 20 3.887 20L7.539 20"/>
</svg>
