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
  <circle cx="11.949462885142566" cy="12.000000000480213" r="10"/>
  <circle cx="11.949462885142566" cy="12.000000000480213" r="5"/>
  <line x1="11.949462885142566" y1="2.000000000480213" x2="11.949462885142566" y2="7.000000000480213"/>
  <line x1="19.020530697164759" y1="19.071067812190449" x2="15.484996791152298" y2="15.535533906338969"/>
</svg>
