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
  <path d="M21.999965446679198,16.142122854238551l-5.197202813878903.660684207039594-.660628552030175,5.197192938720036-4.142105299019022-3.207835441209681-4.142151635991468,3.207803069779402-.660658925458847-5.197141778729929-5.197218220300783-.660689587179149,3.207810159619839-4.142166334169815-3.207803069790316-4.142151635991468,5.197202813891636-.660684207039594.660653833620017-5.197131903569243,4.14208001742918,3.207774406058888,4.142151635989649-3.207803069779402.66080627734118,5.197152250710133,5.197096150008292.660740150349739-3.207688089329167,4.142115770999226,3.207655717898888,4.142141164011264Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="11.999998909050191" cy="11.999999999998181" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
