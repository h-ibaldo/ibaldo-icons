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
  <rect x="3.949462885142566" y="10.000000000480213" width="16" height="12" rx="1" ry="1"/>
  <path d="M16.949462885142566,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012271783-4.999994999998307-4.999995000000126-4.999994999998307h-.000010000000657c-2.761420987730162,0-4.999994999999217,2.238574012269964-4.999994999999217,4.999994999998307v3.000005000001693"/>
  <line x1="9.949462885142566" y1="18.000000000480213" x2="7.949462885142566" y2="18.000000000480213"/>
  <line x1="12.949462885142566" y1="15.990000000479995" x2="12.949462885142566" y2="16.000000000480213"/>
  <line x1="15.949462885142566" y1="15.990000000479995" x2="15.949462885142566" y2="16.000000000480213"/>
</svg>
