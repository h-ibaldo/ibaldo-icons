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
  <rect x="2.016630450971206" y="3.000000000480213" width="4" height="4"/>
  <rect x="18.016630450973025" y="10.000000000480213" width="4" height="4"/>
  <rect x="10.016630450973025" y="3.000000000480213" width="4" height="4"/>
  <rect x="2.016630450971206" y="17.000000000480213" width="4" height="4"/>
  <rect x="10.016630450973025" y="17.000000000480213" width="4" height="4"/>
  <line x1="6.016630450973025" y1="5.000000000480213" x2="10.016630450973025" y2="5.000000000480213"/>
  <line x1="6.016630450973025" y1="19.000000000480213" x2="10.016630450973025" y2="19.000000000480213"/>
  <path d="M14.016630450973025,5.000000000480213h5c.552284749829596,0,1,.447715250167676,1,1v4"/>
  <path d="M14.016630450973025,19.000000000480213h5c.552284749829596,0,1-.447715250171314,1-1v-4"/>
</svg>
