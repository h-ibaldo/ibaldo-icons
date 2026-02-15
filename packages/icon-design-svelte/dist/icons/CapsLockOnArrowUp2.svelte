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
  <polygon points="21.999999977100742 12.999996563434252 11.999999977100742 1.999996563434252 1.999999977100742 12.999996563434252 6.999999977100742 12.999996563434252 6.999999977100742 17.999996563434252 16.999999977100742 17.999996563434252 16.999999977100742 12.999996563434252 21.999999977100742 12.999996563434252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="6.999999977100742" y1="21.999996563434252" x2="16.999999977100742" y2="21.999996563434252" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
