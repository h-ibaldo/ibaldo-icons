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
  <circle cx="3.949462885138928" cy="20.000000000480213" r="2"/>
  <line x1="10.949462885138928" y1="4.000000000480213" x2="21.949462885138928" y2="4.000000000480213"/>
  <line x1="10.949462885138928" y1="12.000000000480213" x2="21.949462885138928" y2="12.000000000480213"/>
  <line x1="10.949462885138928" y1="20.000000000480213" x2="21.949462885138928" y2="20.000000000480213"/>
  <polyline points="1.949462885138928 4.000000000480213 3.949462885138928 6.000000000480213 6.949462885138928 2.000000000480213"/>
  <polyline points="1.949462885138928 12.000000000480213 3.949462885138928 14.000000000480213 6.949462885138928 10.000000000480213"/>
</svg>
