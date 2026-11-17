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
  <rect x="1.999999975221726" y="2.999996561106855" width="20" height="18.000135182977829" rx="1.99999999997533" ry="1.99999999997533" transform="translate(23.999999950865007 24.000128304769987) rotate(180)"/>
  <circle cx="11.999999972062142" cy="11.999996564601133" r="1"/>
  <path d="M11.999999972062142,6.999996564601133c-3.53173828125,0-6.57977294921875,2.03924560546875-8.05340576171875,5,1.4736328125,2.96075439453125,4.52166748046875,5,8.05340576171875,5s6.579772949220569-2.03924560546875,8.053405761720569-5c-1.4736328125-2.96075439453125-4.521667480470569-5-8.053405761720569-5Z"/>
</svg>
