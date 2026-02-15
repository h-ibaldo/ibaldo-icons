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
  <rect x="2.999999981009751" y="2.953616571097882" width="18" height="18.000003999997716" rx="1.315587028959271" ry="1.315587028959271" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.999999981009751,6.953620571095598v1.000004000001354c0,2.209136790181219-1.790859209819246,3.999995999998646-3.999996000000465,3.999995999998646h-.00000799999907c-2.209136790190314,0-3.999996000000465-1.790859209817427-3.999996000000465-3.999995999998646v-1.000004000001354" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
