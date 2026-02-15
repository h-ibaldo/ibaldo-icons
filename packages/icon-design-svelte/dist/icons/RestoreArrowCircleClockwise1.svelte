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
  <polyline points="20.999999981630026 1.999996564662069 20.99999998128078 6.999996564662069 15.999999981409928 6.99999656430191" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.999999981180736,11.999996564705725c-.000000000240107,5.5228271484375-4.477172852009971,9.999999999799911-10.000000000440195,9.999999999552529-5.522827148441138-.000000000251021-9.999999999799911-4.477172852013609-9.999999999559805-10.000000000451109.000000000249202-5.52288818359375,4.477172852019066-9.999999999799911,10.00000000044929-9.999999999548891,3.69921875.000000000163709,6.921447753820757,2.013854980777978,8.651245116969221,5.000000000385626" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="11.999999981190285" cy="11.999996564257344" r="1.999999999999318" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
