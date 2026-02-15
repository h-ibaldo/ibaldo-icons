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
  <rect x="2.000000000183718" y="2.000000000448381" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.000000000183718" y1="8.000000000448381" x2="22.000000000183718" y2="8.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.000000000183718,13.000000000448381l-5-2-5,2v.000003999999535c0,2.415859811970222,1.470833530613163,4.588329412244093,3.71390304963279,5.485557219853035l1.28609695036721.514438780147429,1.28609695036721-.514438780147429c2.243069519019627-.897227807606214,3.71390304963279-3.069697407882813,3.71390304963279-5.485557219851216v-.000004000001354Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.010000000183936" y1="5.000000000448381" x2="5.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.010000000183936" y1="5.000000000448381" x2="8.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.010000000183936" y1="5.000000000448381" x2="11.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
