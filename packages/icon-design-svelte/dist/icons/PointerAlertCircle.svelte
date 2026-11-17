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
  <path d="M22 16C22 12.688 19.313 10 16 10C12.688 10 10 12.688 10 16C10 19.313 12.688 22 16 22C19.313 22 22 19.313 22 16Z"/>
  <path d="M12.898 5.406L2.781 2.246C2.449 2.141 2.141 2.449 2.242 2.781L5.406 12.898C5.574 13.434 6.316 13.426 6.492 12.891C7.48 9.871 9.867 7.48 12.891 6.492C13.426 6.316 13.434 5.574 12.898 5.406Z"/>
  <path d="M16 13.5L16 15.5"/>
  <path d="M16 18.5L16 18.5"/>
</svg>
