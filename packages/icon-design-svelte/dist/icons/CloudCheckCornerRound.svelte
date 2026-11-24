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
  <path d="M16.977172851560681,13.048095676607772c-.230346679691138-2.82556152341931-2.592224121090112-5.048095703110448-5.477172851560681-5.048095703110448s-5.246826171880457,2.222534179691138-5.477172851560681,5.048095703110448c-2.257751464849207.24133300783069-4.022827148439319,2.130065917979664-4.022827148439319,4.451904296889552,0,2.485290527340112,2.014709472650793,4.5,4.5,4.5h10c2.485290527340112,0,4.5-2.014709472659888,4.5-4.5,0-2.321838378909888-1.765075683599207-4.210571289058862-4.022827148439319-4.451904296889552Z"/>
  <polyline points="16 3.999999973497324 18 5.999999973497324 22 1.999999973497324"/>
</svg>
