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
  <circle cx="10" cy="9.999999999998181" r="3"/>
  <path d="M14,16.999999999998181v-.000003999999535c0-2.209136777590174-1.790859209819246-3.999996000000465-3.999996000000465-3.999996000000465h-.00000799999907c-2.209136790181219,0-3.999996000000465,1.79085922241029-3.999996000000465,3.999996000000465v.000003999999535"/>
  <rect x="2" y="1.999999999998181" width="16" height="20" rx="1.788854381999045" ry="1.788854381999045"/>
  <path d="M17.809204101560681,20.999999999998181h2.190795898439319c.937255859369543,0,1.697021484369543-.759826660159888,1.697021484369543-1.697082519529431V4.697082519527612c0-.937255859369543-.759765625-1.697082519529431-1.697021484369543-1.697082519529431h-2.190795898439319"/>
</svg>
