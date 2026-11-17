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
  <rect x="4" y="2.999999999998181" width="18" height="18" rx="2" ry="2"/>
  <line x1="2" y1="6.999999999998181" x2="5" y2="6.999999999998181"/>
  <line x1="2" y1="11.999999999998181" x2="5" y2="11.999999999998181"/>
  <line x1="2" y1="16.999999999998181" x2="5" y2="16.999999999998181"/>
  <circle cx="13" cy="9.999999999998181" r="3"/>
  <path d="M17,16.999999999998181v-.000003999999535c0-2.209136777590174-1.790859209821065-3.999996000000465-3.999996000000465-3.999996000000465h-.00000799999907c-2.2091367901794,0-3.999996000000465,1.79085922241029-3.999996000000465,3.999996000000465v.000003999999535"/>
</svg>
