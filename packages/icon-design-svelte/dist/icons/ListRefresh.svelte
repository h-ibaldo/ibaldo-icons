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
  <path d="M2 4L21 4"/>
  <path d="M2 12L8 12"/>
  <path d="M2 20L8 20"/>
  <path d="M19 14L19 11L22 11"/>
  <path d="M19 11.422C20.766 12.195 22 13.949 22 16C22 18.762 19.762 21 17 21C14.238 21 12 18.762 12 16C12 13.949 13.234 12.195 15 11.422"/>
</svg>
