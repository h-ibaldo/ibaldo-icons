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
  <path d="M5.945388065337922,4.999999997917939h.000008023723644c2.207657891291118,0,3.999996001766968,1.79233811047585,3.999996001766968,3.999996001766968v10.000004000313274H1.945392102097742v-10.000004038840061c0-2.207657870027605,1.792338093212575-3.999995963240181,3.99999596324018-3.999995963240181Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.945392090279711,18.999999999998181h12v-10.000003999999535c0-2.209136790181219-1.790859209819246-3.999996000000465-3.999995999999555-3.999996000000465H5.945392090279711" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="4.945392090279711" y1="9.999999999998181" x2="6.945392090279711" y2="9.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="13.945392090279711 10.999999999998181 17.945392090279711 10.999999999998181 17.945392090279711 13.999999999998181 16.945392090279711 13.999999999998181 16.945392090279711 10.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
