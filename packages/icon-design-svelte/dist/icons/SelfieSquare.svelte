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
  <rect x="1.999999981180736" y="1.999996564258254" width="20" height="20"/>
  <circle cx="11.999999981189831" cy="10.499996564258254" r="3.5"/>
  <path d="M18.111111092299325,21.999996564258254v-1.888895000000048c0-3.375070096113632-2.736034903889959-6.111104999999952-6.111104999999952-6.111104999999952h-.000012222229998c-3.375070096109994,0-6.111104999989038,2.736034903886321-6.111104999989038,6.111104999999952v1.888895000000048"/>
</svg>
