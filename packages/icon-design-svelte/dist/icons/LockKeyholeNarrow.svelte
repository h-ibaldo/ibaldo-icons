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
  <rect x="4.974731441299809" y="10.000000000589353" width="14" height="12" rx="1" ry="1"/>
  <path d="M16.974731441299809,10.000000000589353v-3.000004999998055c0-2.761420987731981-2.238574012269964-4.999995000001945-4.999995000000126-4.999995000001945h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999995000001945v3.000004999998055"/>
  <line x1="11.974731441299809" y1="18.000000000589353" x2="11.974731441299809" y2="16.000000000589353"/>
  <circle cx="11.974731441299809" cy="15.000000000589353" r="1"/>
</svg>
