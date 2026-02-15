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
  <line x1="1.999999990799552" y1="15.000000000446562" x2="11.999999990799552" y2="5.000000000446562" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.999999990799552" y1="15.000000000446562" x2="1.999999990799552" y2="5.000000000446562" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="16.999999990799552 13.000000000446562 13.999999990799552 10.000000000446562 16.999999990799552 7.000000000446562" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.999999990799552,20.000000000446562h4.000004999281373c2.761420987728343.000000000001819,4.999994999998307-2.238574012266326,4.999994999998307-4.99999499999376v-.000010000000657c0-2.761420987720157-2.238574012259051-4.999994999987393-4.999994999980117-4.999994999998307l-2.000005000019883-.000000000007276" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
