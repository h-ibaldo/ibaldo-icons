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
  <polygon points="17.016630450972116 7.000000000480213 12.016630450972116 2.000000000480213 7.016630450972116 7.000000000480213 10.016630450972116 7.000000000480213 10.016630450972116 10.000000000480213 14.016630450972116 10.000000000480213 14.016630450972116 7.000000000480213 17.016630450972116 7.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="7.016630450972116 17.000000000480213 12.016630450972116 22.000000000480213 17.016630450972116 17.000000000480213 14.016630450972116 17.000000000480213 14.016630450972116 14.000000000480213 10.016630450972116 14.000000000480213 10.016630450972116 17.000000000480213 7.016630450972116 17.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
