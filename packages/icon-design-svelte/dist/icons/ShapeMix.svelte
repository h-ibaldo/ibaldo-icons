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
  <circle cx="6.525268555529692" cy="6.500000001208718" r="3.5"/>
  <rect x="14.025268555529692" y="3.000000001208718" width="7" height="7"/>
  <polygon points="2.525268555529692 21.500000001211447 10.525268555529692 21.500000001208718 6.525268555529692 14.375000001208718 2.525268555529692 21.500000001211447"/>
  <polygon points="19.545994497700121 14.000000001211447 15.504542613370177 14.000000001211447 13.483816671209752 17.500000001208718 15.504542613370177 21.000000001208718 19.545994497700121 21.000000001208718 21.566720439859637 17.500000001208718 19.545994497700121 14.000000001211447"/>
</svg>
