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
  <polygon points="7.025268553439673 21.99999656424734 17.025268553439673 21.99999656424734 17.025268553439673 18.99999656424734 14.025268553439673 18.99999656424734 14.025268553439673 10.99999656424734 7.025268553439673 10.99999656424734 7.025268553439673 13.99999656424734 10.025268553439673 13.99999656424734 10.025268553439673 18.99999656424734 7.025268553439673 18.99999656424734 7.025268553439673 21.99999656424734" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="12.025268553439673" cy="4.99999656424734" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
