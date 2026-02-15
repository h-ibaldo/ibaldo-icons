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
  <circle cx="12.025268554611102" cy="12.000000000709406" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="10.025268554611102 11.000000000709406 12.025268554611102 13.000000000709406 16.025268554611102 8.000000000709406" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.311828613199395,6.141784668678156c-.414855957018517-.090759277340112-.844482421880457-.14178466796875-1.286560058588293-.14178466796875-3.313720703130457,0-6,2.686279296878638-6,6,0,3.313720703128638,2.686279296869543,6,6,6,3.313720703119543,0,6-2.686279296871362,6-6,0-.45196533203125-.054077148430224-.890563964840112-.148803710930224-1.31396484375" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
