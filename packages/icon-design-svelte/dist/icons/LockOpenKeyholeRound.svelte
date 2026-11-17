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
  <circle cx="11.949462885139837" cy="15.000000000480213" r="7.000000000000001"/>
  <line x1="11.949462885139837" y1="18.000000000480213" x2="11.949462885139837" y2="14.000000000480213"/>
  <circle cx="11.949462885139837" cy="13.000000000480213" r="1"/>
  <path d="M16.527343744110112,5.000000000480213c-.772216796870453-1.764404296875-2.528686523430224-3-4.577880859370453-3-2.761413574219659,0-5,2.23858642578125-5,5v3"/>
</svg>
