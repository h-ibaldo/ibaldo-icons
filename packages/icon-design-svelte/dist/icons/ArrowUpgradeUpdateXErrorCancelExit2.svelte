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
  <polyline points="19.000000000029104 1.999999999979991 19.000000000029104 5.999999999979991 15.000000000029104 5.999999999979991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16.000000000029104" cy="15.999999999979991" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.000000000029104,5.999999999979991v-.31646728515625c-1.738037109369543-2.23779296875-4.447204589840112-3.68353271484375-7.5-3.68353271484375C6.253295898470242,1.999999999979991,2.000000000029104,6.253295898417491,2.000000000029104,11.499999999979991s4.253295898441138,9.5,9.5,9.5c.365905761720569,0,.722900390630457-.0347900390625,1.078002929691138-.0750732421875" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="18.000000000029104" y1="13.999999999979991" x2="14.000000000029104" y2="17.999999999979991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="18.000000000029104" y1="17.999999999979991" x2="14.000000000029104" y2="13.999999999979991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
