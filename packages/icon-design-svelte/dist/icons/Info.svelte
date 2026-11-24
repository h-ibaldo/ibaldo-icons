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
  <polyline points="8.025268553439673 10.99999656424734 12.025268553439673 10.99999656424734 12.025268553439673 20.999996564243702"/>
  <line x1="8.025268553439673" y1="20.999996564243702" x2="16.025268553439673" y2="20.999996564243702"/>
  <circle cx="12.025268553439673" cy="4.99999656424734" r="2"/>
</svg>
