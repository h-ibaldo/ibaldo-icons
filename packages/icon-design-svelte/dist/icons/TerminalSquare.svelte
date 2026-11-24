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
  <path d="M7.109 8.406L10.609 11.906L7.109 15.406"/>
  <path d="M12.109 15.406L17.109 15.406"/>
  <path d="M6 4L18 4C19.656 4 21 5.344 21 7L21 17C21 18.656 19.656 20 18 20L6 20C4.344 20 3 18.656 3 17L3 7C3 5.344 4.344 4 6 4Z"/>
</svg>
