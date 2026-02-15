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
  <line x1="2.025268558149946" y1="6.998782736171052" x2="22.025268558149946" y2="6.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.025268558149946" y1="11.998782736171052" x2="22.025268558149946" y2="11.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.025268558149946" y1="16.998782736171052" x2="22.025268558149946" y2="16.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
